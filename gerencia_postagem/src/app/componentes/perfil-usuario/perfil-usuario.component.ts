import { Component } from '@angular/core';
import { PostagensPerfilComponent } from '../postagens-perfil/postagens-perfil.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
  imports: [PostagensPerfilComponent]
})
export class PerfilUsuarioComponent {
  nomeUsuario = "valter";
  bioUsuario = "Biografia";
}