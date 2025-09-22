import { TestBed } from '@angular/core/testing';
import { CadastrarTabelaComponent } from './cadastrar-tabela.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Dado o componente de cadastro de tabela', () => {
  let component: CadastrarTabelaComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CadastrarTabelaComponent],
      declarations: []
    });
    const fixture = TestBed.createComponent(CadastrarTabelaComponent);
    component = fixture.componentInstance;
  });

  it('Então o campo nome_tabela deve ser obrigatório', () => {
    const control = component.formsCadastroTabela.get('nome_tabela');
    control?.setValue('');
    expect(control?.valid).toBeFalse();
  });

  it('Então deve disparar o submitForm e exibir os valores no console', () => {
    spyOn(console, 'log');
    component.formsCadastroTabela.setValue({
      nome_tabela: 'Tabela Teste',
      tipo_tabela: { value: 'dados de cliente', disabled: true },
      descricao: 'Descrição',
      nome_cliente: 'Cliente',
      genero: 'Masculino',
      idade: 30,
      email: 'teste@teste.com',
      telefone: '123456789',
      balanco: '1000',
      status_credito: 'aprovado'
    });
    component.submitForm();
    expect(console.log).toHaveBeenCalledWith(component.formsCadastroTabela.value);
  });
});