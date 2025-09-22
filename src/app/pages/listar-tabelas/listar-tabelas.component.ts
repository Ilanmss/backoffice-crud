import { Component } from '@angular/core';
import { Tabela } from '../../shared/interfaces/tabela';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';
import { CabecalhoPaginasComponent } from '../../shared/components/cabecalho-paginas/cabecalho-paginas.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listar-tabelas',
  imports: [CabecalhoPaginasComponent, MatTableModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './listar-tabelas.component.html',
  styleUrl: './listar-tabelas.component.scss'
})
export class ListarTabelasComponent {
  public tabelas: Tabela[] = [];
  public loading: boolean = false;

  colunas: string[] = ['nome tabela', 'tipo', 'owned', 'status', 'acoes'];
  dataSource = this.tabelas;

  constructor(private pegarTabelasService: BuscarTabelasService) {
    this.loading = true;
    this.pegarTabelasDoUsuario();
  }

  private pegarTabelasDoUsuario(): void {
    this.pegarTabelasService.getTodasTabela().subscribe( response => {
      response.forEach( tabela => {
        this.tabelas.push(tabela); 
      });
      this.loading = false;
    });
  }
}
