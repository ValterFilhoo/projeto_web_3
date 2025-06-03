import { Component } from '@angular/core';
import { BotaoCurtidaComponent } from '../botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../qtd-comentarios/qtd-comentarios.component';

@Component({
  selector: 'app-feed-postagens',
  imports: [BotaoCurtidaComponent, QtdComentariosComponent],
  templateUrl: './feed-postagens.component.html',
  styleUrl: './feed-postagens.component.css'
})
export class FeedPostagensComponent {

}
