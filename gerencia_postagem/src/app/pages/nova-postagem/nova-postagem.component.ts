import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { CriarPostagemComponent } from '../../componentes/criar-postagem/criar-postagem.component';
import { FooterComponent } from '../../componentes/footer/footer.component';


@Component({
  selector: 'app-nova-postagem',
  imports: [HeaderComponent, BarraNavegacaoComponent, CriarPostagemComponent, FooterComponent],
  templateUrl: './nova-postagem.component.html',
  styleUrl: './nova-postagem.component.css'
})
export class NovaPostagemComponent {

}
