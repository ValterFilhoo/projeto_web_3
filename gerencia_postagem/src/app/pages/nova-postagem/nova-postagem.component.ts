import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { CriarPostagemComponent } from '../../componentes/criar-postagem/criar-postagem.component';
import { SubirImagemVideoComponent } from '../../componentes/subir-imagem-video/subir-imagem-video.component';
import { FeedbackSucessoErroComponent } from '../../componentes/feedback-sucesso-erro/feedback-sucesso-erro.component';
import { FooterComponent } from '../../componentes/footer/footer.component';


@Component({
  selector: 'app-nova-postagem',
  imports: [HeaderComponent, BarraNavegacaoComponent, CriarPostagemComponent, SubirImagemVideoComponent, FeedbackSucessoErroComponent, FooterComponent],
  templateUrl: './nova-postagem.component.html',
  styleUrl: './nova-postagem.component.css'
})
export class NovaPostagemComponent {

}
