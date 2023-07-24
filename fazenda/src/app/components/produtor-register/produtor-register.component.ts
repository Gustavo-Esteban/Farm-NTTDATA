import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-produtor-register',
  templateUrl: './produtor-register.component.html',
  styleUrls: ['./produtor-register.component.scss']
})
export class ProdutorRegisterComponent {

  constructor(
    private produtorService: ProdutorService,
    private messageService: MessageService,
    private router: Router
  ){

  }

  produtorAdd(event: any) {
    this.produtorService.cadastraProdutor(event).subscribe({
      next: (response) => {
        this.messageService.clear();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Produtor rural cadastrado com sucesso!',
        });
        this.router.navigate(['/produtores']);
      },
      error: (error) => {
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Erro ao tentar cadastrar um produtor rural, recarregue a página ou tente novamente mais tarde!',
        });
      },
    });
  }

}
