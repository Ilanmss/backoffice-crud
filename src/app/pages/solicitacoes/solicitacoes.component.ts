import { Component } from '@angular/core';
import { CabecalhoPaginasComponent } from '../../shared/components/cabecalho-paginas/cabecalho-paginas.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Tabela } from '../../shared/interfaces/tabela';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';

@Component({
  selector: 'app-solicitacoes',
  imports: [CabecalhoPaginasComponent, MatTableModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './solicitacoes.component.html',
  styleUrl: './solicitacoes.component.scss'
})
export class SolicitacoesComponent {
  public tabelasSolicitacoes: Tabela[] = [];
  public loading: boolean = false;

  colunas: string[] = ['nome tabela', 'tipo', 'status'];
  dataSource = this.tabelasSolicitacoes;

  constructor(private pegarTabelasService: BuscarTabelasService) {
    this.loading = true;
    this.pegarTabelasDoUsuario();
  }

  private pegarTabelasDoUsuario(): void {
    this.pegarTabelasService.getTabelasQueNaoPossuiAcesso().subscribe( response => {
      response.forEach( tabela => {
        this.tabelasSolicitacoes.push(tabela); 
      });
      this.loading = false;
    });
  }
}
