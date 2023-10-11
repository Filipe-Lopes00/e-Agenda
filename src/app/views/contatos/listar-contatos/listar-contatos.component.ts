import { Component, OnInit } from '@angular/core';
import { contatosService } from '../../services/contatos.service';
import { ListarContatoViewModel } from '../Models/Listar-contato.view-model';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.css']
})
export class ListarContatosComponent implements OnInit{
  contatos : ListarContatoViewModel[] = [];
   
  constructor(private contatosService: contatosService) {}
  ngOnInit(): void {
    this.contatosService.selecionarTodos().subscribe((res) => {   
      this.contatos = res;
    });
       
  }
}
