import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-botao-curtida',
  templateUrl: './botao-curtida.component.html',
  styleUrls: ['./botao-curtida.component.css'],
  imports: []
})
export class BotaoCurtidaComponent {
  @Input() postagemId !: number;
  @Input() curtidas !: number;
  
}