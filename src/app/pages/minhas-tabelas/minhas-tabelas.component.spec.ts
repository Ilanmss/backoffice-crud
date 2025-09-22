import { TestBed } from '@angular/core/testing';
import { MinhasTabelasComponent } from './minhas-tabelas.component';
import { BuscarTabelasService } from '../../shared/services/buscar-tabelas/buscar-tabelas.service';
import { of } from 'rxjs';

describe('Dado o componente MinhasTabelas', () => {
  let component: MinhasTabelasComponent;
  let serviceSpy: jasmine.SpyObj<BuscarTabelasService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('BuscarTabelasService', ['getOwnedTabelas', 'getTabelasQuePossuiAcesso']);
    serviceSpy.getOwnedTabelas.and.returnValue(of([{ owned: true } as any]));
    serviceSpy.getTabelasQuePossuiAcesso.and.returnValue(of([{ owned: false, has_access: true } as any]));

    TestBed.configureTestingModule({
      providers: [{ provide: BuscarTabelasService, useValue: serviceSpy }],
      imports: [MinhasTabelasComponent],
      declarations: []
    });
    const fixture = TestBed.createComponent(MinhasTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Então deve carregar tabelas do usuário e tabelas que possui acesso', () => {
    expect(component.tabelasDoUsuario.length).toBe(2);
    expect(component.tabelasDoUsuario[0].owned).toBeTrue();
    expect(component.tabelasDoUsuario[1].has_access).toBeTrue();
    expect(component.tabelasDoUsuario[1].owned).toBeFalse();
    expect(component.loading).toBeFalse();
  });
});