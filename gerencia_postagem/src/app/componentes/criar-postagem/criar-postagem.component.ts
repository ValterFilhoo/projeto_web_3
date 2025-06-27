import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubirImagemVideoComponent } from '../subir-imagem-video/subir-imagem-video.component';
import { FormularioPostagemComponent } from '../formulario-postagem/formulario-postagem.component';
import { FeedbackSucessoErroComponent } from '../feedback-sucesso-erro/feedback-sucesso-erro.component';

@Component({
  selector: 'app-criar-postagem',
  imports: [
    CommonModule,
    SubirImagemVideoComponent,
    FormularioPostagemComponent,
    FeedbackSucessoErroComponent
  ],
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css'],
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

  @ViewChild(FormularioPostagemComponent)
  formularioComp!: FormularioPostagemComponent;

  getDados(dados: { id: number; legenda: string }) {
    this.postagem = dados;

    if (!this.postagem.id || !this.postagem.legenda.trim() || !this.arquivo) {
      this.sucesso = false;
      this.mensagemFeedback = 'Erro: todos os campos são obrigatórios.';
    } else {
      this.sucesso = true;
      this.mensagemFeedback = 'Postagem enviada com sucesso!';
    }

    this.reiniciarToast(); 
  }

  getArquivo(arquivo: File) {
    this.arquivo = arquivo;
    console.log('Arquivo recebido no pai:', this.arquivo);
  }

  publicarPostagem() {
    this.formularioComp.enviarFormulario();
  }

  private reiniciarToast(): void {
    this.mostrarToast = false;
    setTimeout(() => (this.mostrarToast = true), 0);
  }
}