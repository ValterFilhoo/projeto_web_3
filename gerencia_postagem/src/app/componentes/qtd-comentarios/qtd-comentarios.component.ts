import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qtd-comentarios',
  imports: [],
  templateUrl: './qtd-comentarios.component.html',
  styleUrl: './qtd-comentarios.component.css'
})
export class QtdComentariosComponent {

  @Input() quantidade !: number


}
