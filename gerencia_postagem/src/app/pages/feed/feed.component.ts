import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { FeedPostagensComponent } from '../../componentes/feed-postagens/feed-postagens.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-feed',
  imports: [HeaderComponent, BarraNavegacaoComponent, FeedPostagensComponent, FooterComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

}
