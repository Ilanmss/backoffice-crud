import { Component } from '@angular/core';
import { CabecalhoPaginasComponent } from '../../shared/components/cabecalho-paginas/cabecalho-paginas.component';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';
import { Tabela } from '../../shared/interfaces/tabela';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-minhas-tabelas',
  imports: [CabecalhoPaginasComponent, MatTableModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './minhas-tabelas.component.html',
  styleUrl: './minhas-tabelas.component.scss'
})
export class MinhasTabelasComponent {

  public tabelasDoUsuario: Tabela[] = [];
  public loading: boolean = false;

  colunas: string[] = ['nome tabela', 'tipo', 'owned', 'acoes'];
  dataSource = this.tabelasDoUsuario;

  constructor(private pegarTabelasService: BuscarTabelasService) {
    this.loading = true;
    this.pegarTabelasDoUsuario();
  }

  private pegarTabelasDoUsuario(): void {
    this.pegarTabelasService.getOwnedTabelas().subscribe( response => {
      response.forEach( tabela => {
        this.tabelasDoUsuario.push(tabela); 
      });
    });
    this.pegarTabelasService.getTabelasQuePossuiAcesso().subscribe( response => {
      response.forEach( tabela => {
        this.tabelasDoUsuario.push(tabela); 
      });
      this.loading = false;
    });
  }

}
