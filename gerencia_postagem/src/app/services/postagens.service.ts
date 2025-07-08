import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) {}

  async getPostagens(): Promise<any> {
    console.log('Serviço de postagens foi chamado');
    return await firstValueFrom(this.http.get("http://localhost:3000/postagens"));
  };

  async createPostagem(postagem: any): Promise<any> {
    const formData = new FormData();

    formData.append('usuario_id', postagem.usuario_id.toString());
    formData.append('legenda', postagem.legenda);
    formData.append('tipo_arquivo', postagem.tipo_arquivo);

    if (postagem.arquivo) {
      formData.append('arquivo', postagem.arquivo);
    }

    return await firstValueFrom(this.http.post("http://localhost:3000/postagens", formData));
  }

  
  async updatePostagem(id: number, dados: any): Promise<any> {
    return await firstValueFrom(
      this.http.put(`http://localhost:3000/postagens/${id}`, dados)
    );
  }

  
  async deletePostagem(id: number): Promise<any> {

    return await firstValueFrom(
      this.http.delete(`http://localhost:3000/postagens/${id}`)
    );

  }
  
}