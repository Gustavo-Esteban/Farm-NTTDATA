import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutorTabelaComponent } from './components/produtor-tabela/produtor-tabela.component';
import { ProdutorEditComponent } from './components/produtor-edit/produtor-edit.component';
import { ProdutorRegisterComponent } from './components/produtor-register/produtor-register.component';
import { GraficosPageComponent } from './components/graficos/graficos-page/graficos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/produtores', pathMatch: 'full' },
  { path: 'produtores', component: ProdutorTabelaComponent },
  { path: 'cadastrar', component: ProdutorRegisterComponent },
  { path: 'editar/:id', component: ProdutorEditComponent },
  { path: 'graficos', component: GraficosPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
