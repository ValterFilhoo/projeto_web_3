import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Perfil } from '../interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly baseUrl = 'http://localhost:3000/perfil';

  constructor(private http: HttpClient) {}

  async getPerfilPorId(id: number): Promise<Perfil> {
    return await firstValueFrom(this.http.get<Perfil>(`${this.baseUrl}/${id}`));
  }
  
}