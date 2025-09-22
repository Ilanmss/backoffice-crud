import { Routes } from '@angular/router';
import { MinhasTabelasComponent } from './pages/minhas-tabelas/minhas-tabelas.component';
import { ListarTabelasComponent } from './pages/listar-tabelas/listar-tabelas.component';
import { SolicitacoesComponent } from './pages/solicitacoes/solicitacoes.component';
import { CadastrarTabelaComponent } from './pages/cadastrar-tabela/cadastrar-tabela.component';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'minhas-tabelas', 
    pathMatch: 'full'
  },
  {
    path: 'minhas-tabelas', 
    component: MinhasTabelasComponent
  },
  {
    path: 'listar-tabelas', 
    component: ListarTabelasComponent
  },
  {
    path: 'solicitacoes', 
    component: SolicitacoesComponent
  },
  {
    path: 'cadastrar-tabela', 
    component: CadastrarTabelaComponent
  },

];
