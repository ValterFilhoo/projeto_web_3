import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Postagem, NovaPostagem, AtualizacaoPostagem } from '../interfaces/postagem.interface';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  
  constructor(private http: HttpClient) {}

  async getPostagens(): Promise<Postagem[]> {
    console.log('Serviço de postagens foi chamado');
    return await firstValueFrom(this.http.get<Postagem[]>("http://localhost:3000/postagens"));
  };

  async getPostagemPorId(id: number): Promise<Postagem> {
    return await firstValueFrom(this.http.get<Postagem>(`http://localhost:3000/postagens/${id}`));
  };

  async createPostagem(postagem: NovaPostagem): Promise<{ mensagem: string; id: number; arquivo: string }> {
    const formData = new FormData();
    formData.append('usuario_id', postagem.usuario_id.toString());
    formData.append('legenda', postagem.legenda);
    formData.append('tipo_arquivo', postagem.tipo_arquivo);
    formData.append('arquivo', postagem.arquivo);

    return await firstValueFrom(this.http.post<{ mensagem: string; id: number; arquivo: string }>("http://localhost:3000/postagens", formData));
  };

  async updatePostagem(id: number, dados: AtualizacaoPostagem): Promise<{ mensagem: string }> {
    return await firstValueFrom(this.http.put<{ mensagem: string }>(`http://localhost:3000/postagens/${id}`, dados));
  };

  async updatePostagemFormData(id: number, formData: FormData): Promise<{ mensagem: string }> {

    return await firstValueFrom(this.http.put<{ mensagem: string }>(
      `http://localhost:3000/postagens/${id}`,
      formData
    ));

  };

  async deletePostagem(id: number): Promise<{ mensagem: string }> {

    return await firstValueFrom(this.http.delete<{ mensagem: string }>(`http://localhost:3000/postagens/${id}`));

  };

};