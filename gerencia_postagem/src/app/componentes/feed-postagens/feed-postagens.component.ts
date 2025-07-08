import { Component, OnInit } from '@angular/core';
import { BotaoCurtidaComponent } from '../botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../qtd-comentarios/qtd-comentarios.component';
import { PostagemService } from '../../services/postagens.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-postagens',
  imports: [BotaoCurtidaComponent, QtdComentariosComponent, CommonModule],
  templateUrl: './feed-postagens.component.html',
  styleUrl: './feed-postagens.component.css'
})
export class FeedPostagensComponent implements OnInit {

  nomeUsuario = 'valter_filho';
  postagens: any[] = [];

  constructor(private postagemServicos: PostagemService) {}

  async ngOnInit(): Promise<void> {
    await this.carregarPostagens();
  };

  async carregarPostagens(): Promise<void> {

    try {

      const resposta = await this.postagemServicos.getPostagens();
      this.postagens = resposta;
      console.log('Resultado da requisição:', resposta);
      
    } catch (erro) {
      console.log(`Erro na requisição: ${erro}`);
    };

  };

};