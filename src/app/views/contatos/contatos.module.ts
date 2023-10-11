import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertirContatosComponent } from './insertir-contatos/insertir-contatos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { contatosService } from '../services/contatos.service';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InsertirContatosComponent, ListarContatosComponent],
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  providers: [contatosService ]
})
export class ContatosModule { }
