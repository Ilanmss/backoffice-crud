import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarItems = [
    {nome: 'Minhas tabelas', route: '/minhas-tabelas', icon: 'home'},
    {nome: 'Solicitações', route: '/solicitacoes', icon: 'build_circle'},
    {nome: 'Todas as tabela', route: '/listar-tabelas', icon: 'menu'},
    {nome: 'Cadastrar tabela', route: '/cadastrar-tabela', icon: 'add'},
  ];
}
