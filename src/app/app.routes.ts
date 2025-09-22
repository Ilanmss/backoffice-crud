import { Routes } from '@angular/router';
import { MinhasTabelasComponent } from './pages/minhas-tabelas/minhas-tabelas.component';
import { ListarTabelasComponent } from './pages/listar-tabelas/listar-tabelas.component';

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

];
