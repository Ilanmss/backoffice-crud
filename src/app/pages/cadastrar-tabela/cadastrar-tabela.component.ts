import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CabecalhoPaginasComponent } from "../../shared/components/cabecalho-paginas/cabecalho-paginas.component";

@Component({
  selector: 'app-cadastrar-tabela',
  imports: [MatSelectModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, CabecalhoPaginasComponent],
  templateUrl: './cadastrar-tabela.component.html',
  styleUrl: './cadastrar-tabela.component.scss'
})
export class CadastrarTabelaComponent {

  public formsCadastroTabela: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formsCadastroTabela = this.fb.group({
      nome_tabela: new FormControl('', [Validators.required]), 
      tipo_tabela: new FormControl({ value: "dados de cliente", disabled: true }),
      descricao: new FormControl('', [Validators.required]), 
      
      nome_cliente: new FormControl('', [Validators.required]), 
      genero: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required, Validators.min(0)]), 
      email: new FormControl('', [Validators.required, Validators.email]), 
      telefone: new FormControl('', [Validators.required]), 
      balanco: new FormControl('', [Validators.required]),
      status_credito: new FormControl('', [Validators.required]),  

    });
  }

  submitForm() {
    // enviar formulario para o backend para análise e salvar no banco de dados
    console.log(this.formsCadastroTabela.value);
  }
}
