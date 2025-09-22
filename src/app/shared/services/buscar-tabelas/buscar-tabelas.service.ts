import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Tabela } from '../../interfaces/tabela';
import MOCKDATA from './mock.json';

@Injectable({
  providedIn: 'root',
})
export class BuscarTabelasService {

  constructor() { }

  public getTodasTabela(): Observable<Tabela[]> {
   // return this.http.get<Tabela[]>('/v1/endpoint');
   return of (MOCKDATA);
  }

  public getOwnedTabelas(): Observable<Tabela[]> {
    // return this.http.get<Tabela[]>('/v1/endpoint');
    let resposta: Tabela[] = MOCKDATA.filter(tabela => tabela.owned === true);
    return of (resposta as Tabela[]);
  }

  public getTabelasQuePossuiAcesso(): Observable<Tabela[]> {
    // return this.http.get<Tabela[]>('/v1/endpoint');
    let resposta: Tabela[] = MOCKDATA.filter(tabela => tabela.owned === false && tabela.has_access === true);
    return of (resposta as Tabela[]);
  }

}
