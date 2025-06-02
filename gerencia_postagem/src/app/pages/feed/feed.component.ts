import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { FeedPostagensComponent } from '../../componentes/feed-postagens/feed-postagens.component';
import { BotaoCurtidaComponent } from '../../componentes/botao-curtida/botao-curtida.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { QtdComentariosComponent } from '../../componentes/qtd-comentarios/qtd-comentarios.component';

@Component({
  selector: 'app-feed',
  imports: [HeaderComponent, BarraNavegacaoComponent, FeedPostagensComponent, BotaoCurtidaComponent, QtdComentariosComponent, FooterComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

}
