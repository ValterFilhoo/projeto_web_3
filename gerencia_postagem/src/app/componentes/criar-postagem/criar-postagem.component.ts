import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubirImagemVideoComponent } from '../subir-imagem-video/subir-imagem-video.component';
import { FormularioPostagemComponent } from '../formulario-postagem/formulario-postagem.component';
import { FeedbackSucessoErroComponent } from '../feedback-sucesso-erro/feedback-sucesso-erro.component';
import { PostagemService } from '../../services/postagens.service';
import { NovaPostagem } from '../../interfaces/postagem.interface';

@Component({
  selector: 'app-criar-postagem',
  imports: [ CommonModule, SubirImagemVideoComponent, FormularioPostagemComponent, FeedbackSucessoErroComponent],
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent {

  mensagemFeedback = '';
  sucesso = false;
  mostrarToast = false;

  arquivo: File | null = null;
  postagem = {
    id: 0,
    legenda: ''
  };

  @ViewChild('formularioRef')
  formularioComp!: FormularioPostagemComponent;

  constructor(private postagemService: PostagemService) {}

  getDados(dados: { idUsuario: string | number | null; legendaPostagem: string }): void {
    
    this.postagem.id = Number(dados.idUsuario);
    this.postagem.legenda = dados.legendaPostagem;

    if (!this.postagem.id || !this.postagem.legenda.trim() || !this.arquivo) {
      this.sucesso = false;
      this.mensagemFeedback = 'Erro: todos os campos são obrigatórios.';
      this.reiniciarToast();
      return;
    };

    this.enviarPostagem();

  };

  getArquivo(arquivo: File): void {
    this.arquivo = arquivo;
    console.log('Arquivo recebido no pai:', this.arquivo);
  };

  publicarPostagem(): void {
    console.log('Clique detectado. formulário:', this.formularioComp);
    this.formularioComp.enviarFormulario();
  };

  private async enviarPostagem(): Promise<void> {

    const tipo_arquivo = this.arquivo?.type.startsWith('image') ? 'imagem' : 'video';

    const dadosPostagem: NovaPostagem = {
      usuario_id: this.postagem.id,
      legenda: this.postagem.legenda,
      tipo_arquivo,
      arquivo: this.arquivo as File
    };

    try {

      await this.postagemService.createPostagem(dadosPostagem);
      this.sucesso = true;
      this.mensagemFeedback = 'Postagem cadastrada com sucesso!';

    } catch (erro) {
      console.error('Erro ao criar postagem:', erro);
      this.sucesso = false;
      this.mensagemFeedback = 'Erro ao enviar a postagem.';
    }

    this.reiniciarToast();

  };

  private reiniciarToast(): void {
    this.mostrarToast = false;
    setTimeout(() => (this.mostrarToast = true), 0);
  }

}