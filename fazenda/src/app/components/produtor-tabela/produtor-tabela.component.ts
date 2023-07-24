import { Component } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Router } from '@angular/router';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Produtor } from 'src/app/models/Produtor';

@Component({
  selector: 'app-produtor-tabela',
  templateUrl: './produtor-tabela.component.html',
  styleUrls: ['./produtor-tabela.component.scss'],
  providers: [MessageService]
})
export class ProdutorTabelaComponent {

  produtor!: Produtor[];
  loading: boolean = true;

  constructor(
    private messageService: MessageService,
    private produtorService: ProdutorService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ruralProducerSearch();
  }

  ruralProducerSearch() {
    this.produtorService.listaProdutores().subscribe({
      next: (response) => {
        this.produtor = response;
      },
      error: (error) => {
        this.loading = false;
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

  produtorEdit(produtor: Produtor) {
    const produtorId = produtor.id;
    this.router.navigate(['/editar', produtorId]);
  }

  deleteProdutor(produtor: Produtor){
    this.produtorService.deleteProdutor(produtor).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'sucess',
          summary: 'Confirmado',
          detail: 'O produtor foi deletado com sucesso!',
        });
        this.ruralProducerSearch();
      },
      error: (error) => {
        this.loading = false;
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Erro ao deletar o produtor rural, recarregue a página ou tente novamente mais tarde!',
        });
      },
    });
  }

}
