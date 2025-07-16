import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostagemPerfil } from '../../interfaces/postagem.interface';
import { PostagemService } from '../../services/postagens.service';

@Component({
  selector: 'app-postagens-perfil',
  imports: [CommonModule, RouterLink],
  templateUrl: './postagens-perfil.component.html',
  styleUrls: ['./postagens-perfil.component.css'],
})
export class PostagensPerfilComponent {
  
  @Input() postagens: PostagemPerfil[] = [];

  constructor(private postagemService: PostagemService) {}

  async excluirPostagem(id: number): Promise<void> {

    const confirmar = confirm('Tem certeza que deseja excluir esta postagem?');

    if (!confirmar) return;

    try {

      await this.postagemService.deletePostagem(id);
      this.postagens = this.postagens.filter(post => post.id !== id);
      console.log(`Postagem ID ${id} excluída.`);

    } catch (erro) {

      console.log('Erro ao excluir postagem:', erro);

    };

  };

};