import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { PerfilUsuarioComponent } from '../../componentes/perfil-usuario/perfil-usuario.component';
import { PostagensPerfilComponent } from '../../componentes/postagens-perfil/postagens-perfil.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-perfil',
  imports: [HeaderComponent, BarraNavegacaoComponent, PerfilUsuarioComponent, PostagensPerfilComponent, FooterComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
