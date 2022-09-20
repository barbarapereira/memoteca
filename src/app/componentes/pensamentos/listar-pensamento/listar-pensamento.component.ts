import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {


  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Quanto maior se é, mais repetido se é. Platão, Aristóteles, Kant, quantos outros. Ainda se não calaram nos que deles falaram. E é possível que só se calem quando a espécie humana se calar Quanto maior se é, mais repetido se é. Platão, Aristóteles, Kant, quantos outros. Ainda se não calaram nos que deles falaram. E é possível que só se calem quando a espécie humana se calar.',
      autoria: 'Vergílio Ferreira',
      modelo: 'modelo3'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
