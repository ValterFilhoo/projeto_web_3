import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoCurtidaComponent } from '../botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../qtd-comentarios/qtd-comentarios.component';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, BotaoCurtidaComponent, QtdComentariosComponent]
})
export class DetalhesPostagemComponent {

  id = 1;
  usuario = "valter_filho";
  imagem = "assets/images/img_dog.png";
  legenda = "Esse é o conteúdo completo da postagem de exemplo.";

  comentarios = [
    { autor: 'valter_filho', mensagem: 'Muito bonito!' },
    { autor: 'filho_valter', mensagem: 'Belo dog!' }
  ];

}