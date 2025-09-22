import { TestBed } from '@angular/core/testing';
import { SolicitacoesComponent } from './solicitacoes.component';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';
import { of } from 'rxjs';

describe('Dado o componente Solicitacoes', () => {
  let component: SolicitacoesComponent;
  let serviceSpy: jasmine.SpyObj<BuscarTabelasService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('BuscarTabelasService', ['getTabelasQueNaoPossuiAcesso']);
    serviceSpy.getTabelasQueNaoPossuiAcesso.and.returnValue(of([{ status: 'pendente' } as any]));

    TestBed.configureTestingModule({
      providers: [{ provide: BuscarTabelasService, useValue: serviceSpy }],
      imports: [SolicitacoesComponent],
      declarations: []
    });
    const fixture = TestBed.createComponent(SolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Então deve carregar as tabelas de solicitações ao inicializar', () => {
    expect(component.tabelasSolicitacoes.length).toBe(1);
    expect(component.tabelasSolicitacoes[0].status).toBe('pendente');
    expect(component.loading).toBeFalse();
  });
});