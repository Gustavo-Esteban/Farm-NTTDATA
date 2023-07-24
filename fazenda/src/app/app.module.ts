import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpfCnpjValidatorDirective } from './directives/cpf-cnpj-validator.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { ProdutorService } from './services/produtor.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutorFormComponent } from './components/produtor-form/produtor-form.component';
import { ProdutorEditComponent } from './components/produtor-edit/produtor-edit.component';
import { ProdutorRegisterComponent } from './components/produtor-register/produtor-register.component';
import { ProdutorTabelaComponent } from './components/produtor-tabela/produtor-tabela.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GraficosPageComponent } from './components/graficos/graficos-page/graficos-page.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CpfCnpjValidatorDirective,
    ProdutorFormComponent,
    ProdutorEditComponent,
    ProdutorRegisterComponent,
    ProdutorTabelaComponent,
    GraficosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    HttpClientModule,
    NgbModule,
    ToastModule,
    ConfirmDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    ChartModule,
    CardModule,
    CommonModule


  ],
  providers: [
    ProdutorService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
