import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTabelaComponent } from './cadastrar-tabela.component';

describe('CadastrarTabelaComponent', () => {
  let component: CadastrarTabelaComponent;
  let fixture: ComponentFixture<CadastrarTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
