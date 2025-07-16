import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { SubirImagemVideoComponent } from '../../componentes/subir-imagem-video/subir-imagem-video.component';
import { FormularioPostagemComponent } from '../../componentes/formulario-postagem/formulario-postagem.component';
import { FeedbackSucessoErroComponent } from '../../componentes/feedback-sucesso-erro/feedback-sucesso-erro.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { PostagemService } from '../../services/postagens.service';

@Component({
  selector: 'app-editar-postagem',
  imports: [
    CommonModule, HeaderComponent, BarraNavegacaoComponent, SubirImagemVideoComponent, FormularioPostagemComponent, FeedbackSucessoErroComponent, FooterComponent],
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.css']
})
export class EditarPostagemComponent implements OnInit {

  @ViewChild(FormularioPostagemComponent)
  formularioRef!: FormularioPostagemComponent;

  mostrarToast = false;
  sucesso = false;
  mensagemFeedback = '';
  idPostagem!: number;

  arquivoRecebido: File | string | null = null;
  arquivoParaPreview: string | undefined;

  valoresFormulario!: {
    idUsuario: number;
    legendaPostagem: string;
  };

  dadosDoFormulario!: {
    idUsuario: string | number | null;
    legendaPostagem: string;
  };

  constructor(
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) {}

  async ngOnInit(): Promise<void> {

    this.idPostagem = Number(this.route.snapshot.paramMap.get('id'));
    const postagem = await this.postagemService.getPostagemPorId(this.idPostagem);

    console.log('Postagem recebida:', postagem);

    this.valoresFormulario = {
      idUsuario: postagem.usuario_id,
      legendaPostagem: postagem.legenda
    };

    console.log('Valores do formulário:', this.valoresFormulario);

    this.arquivoRecebido = postagem.caminho_arquivo;
    this.arquivoParaPreview = typeof postagem.caminho_arquivo === 'string' ? postagem.caminho_arquivo : undefined;

  };

  receberArquivo(arquivo: File) {
    this.arquivoRecebido = arquivo;
    this.arquivoParaPreview = undefined;
  };

  receberDadosFormulario(dados: { idUsuario: string | number | null; legendaPostagem: string }) {
    this.dadosDoFormulario = dados;
  };

  async atualizarPostagem() {

    this.formularioRef.enviarFormulario();

    if (!this.dadosDoFormulario) {
      console.error('Formulário não foi preenchido. Abortando atualização.');
      this.sucesso = false;
      this.mensagemFeedback = 'Preencha os dados antes de atualizar.';
      this.mostrarToast = true;
      return;
    };

    try {

      const tipoArquivo = typeof this.arquivoRecebido === 'string' ? 'imagem': this.arquivoRecebido?.type.startsWith('video') ? 'video' : 'imagem'
  

      const formData = new FormData();
      formData.append('legenda', this.dadosDoFormulario.legendaPostagem);
      formData.append('tipo_arquivo', tipoArquivo);

      console.log('Valor final de caminho_arquivo:', this.arquivoRecebido);


    if (this.arquivoRecebido instanceof File) {

      console.log('Conteúdo:', this.arquivoRecebido);
      formData.append('arquivo', this.arquivoRecebido); 

    } else if (typeof this.arquivoRecebido === 'string' && this.arquivoRecebido !== null &&
      this.arquivoRecebido !== undefined && this.arquivoRecebido.trim() !== '') {

      console.log('Arquivo é string válida?', typeof this.arquivoRecebido === 'string');

      formData.append('caminho_arquivo', this.arquivoRecebido);

    };

    await this.postagemService.updatePostagemFormData(this.idPostagem, formData);

    this.sucesso = true;
    this.mensagemFeedback = 'Postagem atualizada com sucesso!';

    } catch (erro) {

      this.sucesso = false;
      this.mensagemFeedback = 'Erro ao atualizar postagem.';
      console.error('Erro ao atualizar:', erro);

    } finally {
        this.mostrarToast = true;
      };

    };

};