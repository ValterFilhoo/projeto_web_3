import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { DetalhesPostagemComponent } from '../../componentes/detalhes-postagem/detalhes-postagem.component';
import { BotaoCurtidaComponent } from '../../componentes/botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../../componentes/qtd-comentarios/qtd-comentarios.component';
import { FooterComponent } from '../../componentes/footer/footer.component';


@Component({
  selector: 'app-postagem',
  imports: [HeaderComponent, BarraNavegacaoComponent, DetalhesPostagemComponent, BotaoCurtidaComponent, QtdComentariosComponent, FooterComponent, ],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {

}
