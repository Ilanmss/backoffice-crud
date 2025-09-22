import { Routes } from '@angular/router';
import { MinhasTabelasComponent } from './pages/minhas-tabelas/minhas-tabelas.component';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'minhas-tabelas', 
    pathMatch: 'full'
  },
  {
    path: 'minhas-tabelas', 
    component:MinhasTabelasComponent
  },

];
