import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoCurtidaComponent } from '../botao-curtida/botao-curtida.component';
import { QtdComentariosComponent } from '../qtd-comentarios/qtd-comentarios.component';

@Component({
  selector: 'app-detalhes-postagem',
  imports: [CommonModule, BotaoCurtidaComponent, QtdComentariosComponent],
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
})
export class DetalhesPostagemComponent {

  @Input() imagem!: string;
  @Input() tipo_arquivo!: 'imagem' | 'video';
  @Input() usuario!: string;
  @Input() legenda!: string;
  @Input() comentarios: { autor: string; mensagem: string }[] = [];

}