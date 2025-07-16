import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subir-imagem-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subir-imagem-video.component.html',
  styleUrls: ['./subir-imagem-video.component.css'],
})
export class SubirImagemVideoComponent {

  @Input() arquivoAtual: string | null | undefined;
  @Output() arquivo = new EventEmitter<File>();

  arquivoSelecionado: File | null = null;
  previewUrl: string = '';
  isImagem: boolean = false;

  ngOnInit(): void {
  console.log('Arquivo atual recebido pelo componente:', this.arquivoAtual);
}

  processarArquivo(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  this.arquivoSelecionado = input.files[0];
  this.isImagem = this.arquivoSelecionado.type.startsWith('image');

  const reader = new FileReader();

  reader.onload = (e) => {
    // ⏱ Espera um ciclo para garantir que a renderização esteja pronta
    setTimeout(() => {
      this.previewUrl = e.target?.result as string;
    }, 0);
  };

  reader.readAsDataURL(this.arquivoSelecionado);
  this.arquivo.emit(this.arquivoSelecionado);
}

  removerArquivo(): void {
    this.arquivoSelecionado = null;
    this.previewUrl = '';
  };

};