import { TestBed } from '@angular/core/testing';
import { BuscarTabelasService } from './buscar-tabelas.service';

describe('Dado o serviço BuscarTabelasService', () => {
  let service: BuscarTabelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarTabelasService],
    });
    service = TestBed.inject(BuscarTabelasService);
  });

  it('Então deve retornar todas as tabelas mockadas', (done) => {
    service.getTodasTabela().subscribe(tabelas => {
      expect(Array.isArray(tabelas)).toBeTrue();
      done();
    });
  });

  it('Então deve retornar apenas tabelas owned', (done) => {
    service.getOwnedTabelas().subscribe(tabelas => {
      expect(tabelas.every(t => t.owned)).toBeTrue();
      done();
    });
  });

  it('Então deve retornar apenas tabelas que possui acesso', (done) => {
    service.getTabelasQuePossuiAcesso().subscribe(tabelas => {
      expect(tabelas.every(t => !t.owned && t.has_access)).toBeTrue();
      done();
    });
  });

  it('Então deve retornar apenas tabelas que não possui acesso', (done) => {
    service.getTabelasQueNaoPossuiAcesso().subscribe(tabelas => {
      expect(tabelas.every(t => !t.owned && !t.has_access && t.status !== 'solicitar acesso')).toBeTrue();
      done();
    });
  });
});