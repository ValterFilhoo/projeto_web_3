import { Component, OnInit } from '@angular/core';
import { PostagensPerfilComponent } from '../postagens-perfil/postagens-perfil.component';
import { UsuariosService } from '../../services/usuarios.service';
import { PostagemPerfil } from '../../interfaces/postagem.interface';
import { Perfil } from '../../interfaces/perfil.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-usuario',
  imports: [CommonModule, PostagensPerfilComponent],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {

  nomeUsuario = '';
  bioUsuario = '';
  postagens: PostagemPerfil[] = [];

  constructor(private usuariosService: UsuariosService) {}

  async ngOnInit(): Promise<void> {

    const idUsuario = 1; 

    try {

      const perfil: Perfil = await this.usuariosService.getPerfilPorId(idUsuario);
      this.nomeUsuario = perfil.nome;
      this.bioUsuario = perfil.biografia;
      this.postagens = perfil.postagens;

    } catch (erro) {
      console.error('Erro ao carregar perfil:', erro);
    };

  };
  
};