import { TestBed } from '@angular/core/testing';
import { ListarTabelasComponent } from './listar-tabelas.component';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';
import { of } from 'rxjs';

describe('Dado o componente ListarTabelas', () => {
  let component: ListarTabelasComponent;
  let serviceSpy: jasmine.SpyObj<BuscarTabelasService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('BuscarTabelasService', ['getTodasTabela']);
    serviceSpy.getTodasTabela.and.returnValue(of([{ table_name: 'Tabela 1' } as any]));

    TestBed.configureTestingModule({
      providers: [{ provide: BuscarTabelasService, useValue: serviceSpy }],
      imports: [ListarTabelasComponent],
      declarations: []
    });
    const fixture = TestBed.createComponent(ListarTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Então deve carregar todas as tabelas ao inicializar', () => {
    expect(component.tabelas.length).toBe(1);
    expect(component.tabelas[0].table_name).toBe('Tabela 1');
    expect(component.loading).toBeFalse();
  });
});