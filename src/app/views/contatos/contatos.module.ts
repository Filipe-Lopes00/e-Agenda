import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertirContatosComponent } from './insertir-contatos/insertir-contatos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { contatosService } from '../services/contatos.service';



@NgModule({
  declarations: [InsertirContatosComponent],
  imports: [CommonModule,ReactiveFormsModule],
  providers: [contatosService ]
})
export class ContatosModule { }
