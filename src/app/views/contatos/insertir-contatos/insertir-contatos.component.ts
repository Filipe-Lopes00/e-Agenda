import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { contatosService } from '../../services/contatos.service';
import { Router } from '@angular/router';
import { FormsContatoViewModel } from '../Models/Forms-contato.view-model';

@Component({
  selector: 'app-insertir-contatos',
  templateUrl: './insertir-contatos.component.html',
  styleUrls: ['./insertir-contatos.component.css'],
})
export class InsertirContatosComponent implements OnInit {
  form! : FormGroup;
  contatoVM! : FormsContatoViewModel

  constructor(private formBuilder: FormBuilder,
  private contatoService: contatosService,
  private router: Router ){} 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
      cargo: new FormControl(''),
      empresa: new FormControl(''),
    })
  }

  gravar () {
    this.contatoVM = this.form.value;

    this.contatoService.inserir(this.contatoVM).subscribe((res) => {
      console.log(res);
    
      this.router.navigate(['/contatos/listar']);
  });
 }
}
