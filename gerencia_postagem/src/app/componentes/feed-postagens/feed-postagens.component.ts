import { Component, OnInit } from '@angular/core';
import { BotaoCurtidaComponent } from '../botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../qtd-comentarios/qtd-comentarios.component';
import { PostagemService } from '../../services/postagens.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Postagem } from '../../interfaces/postagem.interface';

@Component({
  selector: 'app-feed-postagens',
  imports: [BotaoCurtidaComponent, QtdComentariosComponent, CommonModule, RouterModule],
  templateUrl: './feed-postagens.component.html',
  styleUrl: './feed-postagens.component.css'
})
export class FeedPostagensComponent implements OnInit {

  postagens: Postagem[] = [];

  constructor(private postagemServicos: PostagemService) {}

  ngOnInit(): void {
    this.carregarPostagens();
  };

  private async carregarPostagens(): Promise<void> {

    try {
      const resposta = await this.postagemServicos.getPostagens();
      this.postagens = resposta;
      console.log('Resultado da requisição:', resposta);
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    };

  };

};