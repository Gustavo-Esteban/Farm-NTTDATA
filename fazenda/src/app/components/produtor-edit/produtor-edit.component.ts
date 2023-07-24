import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produtor } from 'src/app/models/Produtor';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-produtor-edit',
  templateUrl: './produtor-edit.component.html',
  styleUrls: ['./produtor-edit.component.scss']
})
export class ProdutorEditComponent {

  produtorEdit!: Produtor;

  producerId!: number;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private produtorService: ProdutorService,
    private router: Router
    ){}

    ngOnInit() {
      this.getProducerId();
      this.getProducerById();
    }

    getProducerId() {
      this.route.paramMap.subscribe((params) => {
        this.producerId = Number(params.get('id'));
      });
    }

    getProducerById() {
      this.produtorService.getProdutor(this.producerId).subscribe({
        next: (response) => {
          this.produtorEdit = response;
        },
        error: (error) => {
          this.messageService.clear();
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail:
              'Erro ao buscar os produtores rurais, recarregue a página ou tente novamente mais tarde!',
          });
        },
      });
    }

    editRuralProducer(event: any) {
      this.produtorService.updateProdutor(event).subscribe({
        next: (response) => {
          this.messageService.clear();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Produtor rural atualizado com sucesso!',
          });
          this.router.navigate(['/produtores']);
        },
        error: (error) => {
          this.messageService.clear();
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail:
              'Erro ao tentar atualizar um produtor rural, recarregue a página ou tente novamente mais tarde!',
          });
        },
      });
    }

}
