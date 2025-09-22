import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho-paginas',
  imports: [],
  templateUrl: './cabecalho-paginas.component.html',
  styleUrl: './cabecalho-paginas.component.scss'
})
export class CabecalhoPaginasComponent {
  @Input() titulo: string = '';
  @Input() descricao?: string = '';
}
