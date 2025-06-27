import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subir-imagem-video',
  imports: [CommonModule],
  templateUrl: './subir-imagem-video.component.html',
  styleUrls: ['./subir-imagem-video.component.css'],
})
export class SubirImagemVideoComponent {

  @Output() arquivo = new EventEmitter<File>();

  
  arquivoSelecionado: File | null = null;
  previewUrl: string = '';
  isImagem: boolean = false;

  processarArquivo(event: Event): void {

    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.arquivoSelecionado = input.files[0];
    this.isImagem = this.arquivoSelecionado.type.startsWith('image');

    const reader = new FileReader();
    reader.onload = (e) => this.previewUrl = e.target?.result as string;
    reader.readAsDataURL(this.arquivoSelecionado);


    this.arquivo.emit(this.arquivoSelecionado)

  }

  removerArquivo(): void {
    this.arquivoSelecionado = null;
    this.previewUrl = '';
  }
}
