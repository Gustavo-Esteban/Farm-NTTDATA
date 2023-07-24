import { Component,Input, EventEmitter,Output} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { MessageService } from 'primeng/api';
import { Produtor } from 'src/app/models/Produtor';
import { Estados } from 'src/app/shared/Estados';

@Component({
  selector: 'app-produtor-form',
  templateUrl: './produtor-form.component.html',
  styleUrls: ['./produtor-form.component.scss'],
  providers: [MessageService]
})
export class ProdutorFormComponent {
  @Output() onSubmit = new EventEmitter<Produtor>();
  @Input() produtorEdit: Produtor | null = null;
  produtorForm!: FormGroup;
  culturas!: FormGroup;
  estados: any[] = Estados.listaEstados;

  constructor(private messageService: MessageService){

  }

  ngOnInit() {
    this.ruralProducerFormInit();
  }

  ngOnChanges() {
    this.ruralProducerFormInit();
  }


  ruralProducerFormInit() {
    this.culturas = new FormGroup({
      soja: new FormControl(
        this.produtorEdit
          ? this.produtorEdit.culturas.soja
          : false
      ),
      milho: new FormControl(
        this.produtorEdit
          ? this.produtorEdit.culturas.milho
          : false
      ),
      algodao: new FormControl(
        this.produtorEdit
          ? this.produtorEdit.culturas.algodao
          : false
      ),
      cafe: new FormControl(
        this.produtorEdit
          ? this.produtorEdit.culturas.cafe
          : false
      ),
      canaDeAcucar: new FormControl(
        this.produtorEdit
          ? this.produtorEdit.culturas.canaDeAcucar
          : false
      ),
    });

    this.produtorForm = new FormGroup(
      {
        id: new FormControl(
          this.produtorEdit ? this.produtorEdit.id : ''
        ),
        cpfCnpj: new FormControl(
          this.produtorEdit ? this.produtorEdit.cpfCnpj : ''
        ),
        nomeProdutor: new FormControl(
          this.produtorEdit ? this.produtorEdit.nomeProdutor : ''
        ),
        nomeFazenda: new FormControl(
          this.produtorEdit ? this.produtorEdit.nomeFazenda : ''
        ),
        cidade: new FormControl(
          this.produtorEdit ? this.produtorEdit.cidade : ''
        ),
        estado: new FormControl(
          this.produtorEdit ? this.produtorEdit.estado : ''
        ),
        areaTotalHectares: new FormControl(
          this.produtorEdit ? this.produtorEdit.areaTotalHectares : ''
        ),
        areaAgricultavelHectares: new FormControl(
          this.produtorEdit ? this.produtorEdit.areaAgricultavelHectares : ''
        ),
        areaVegetacaoHectares: new FormControl(
          this.produtorEdit
            ? this.produtorEdit.areaVegetacaoHectares
            : ''
        ),
        culturas: this.culturas,
      },
      { validators: this.areaExceededValidation() }
    );
  }

  formatCpfCnpj() {
    if (this.produtorForm.controls['document'].valid) {
      let formattedCpfCnpj: string;
      if (this.produtorForm.controls['document'].value.length >= 14) {
        formattedCpfCnpj = cnpj.format(
          this.produtorForm.controls['document'].value
        );
      } else {
        formattedCpfCnpj = cpf.format(
          this.produtorForm.controls['document'].value
        );
      }
      this.produtorForm.controls['document'].setValue(formattedCpfCnpj);
    }
  }

  ruralProducerSubmit() {
    if (this.produtorForm.invalid) {
      this.messageService.clear();
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Verifique os dados inseridos e tente novamente!',
      });
    } else {
      this.onSubmit.emit(this.produtorForm.value);
    }
  }

  areaExceededValidation(): ValidatorFn {
    return (control: AbstractControl) => {
      const areaTotalHectares = control.get('areaTotalHectares');
      const areaAgricultavelHectares = control.get('areaAgricultavelHectares');
      const areaVegetacaoHectares = control.get('areaVegetacaoHectares');

      if (areaTotalHectares && areaAgricultavelHectares && areaVegetacaoHectares) {
        const farmTotalArea = parseFloat(areaTotalHectares.value);
        const arableArea = parseFloat(areaAgricultavelHectares.value);
        const vegetationArea = parseFloat(areaVegetacaoHectares.value);

        if (arableArea + vegetationArea > farmTotalArea) {
          areaTotalHectares.setErrors({ areaExceeded: true });
          areaAgricultavelHectares.setErrors({ areaExceeded: true });
          areaVegetacaoHectares.setErrors({ areaExceeded: true });
          return { areaExceeded: true };
        } else if (
          arableArea + vegetationArea < farmTotalArea ||
          (areaTotalHectares.value.length > 0 &&
            areaAgricultavelHectares.value.length > 0 &&
            areaVegetacaoHectares.value.length > 0)
        ) {
          areaTotalHectares.setErrors(null);
          areaAgricultavelHectares.setErrors(null);
          areaVegetacaoHectares.setErrors(null);
        }
      }

      return null;
    };
  }
}
