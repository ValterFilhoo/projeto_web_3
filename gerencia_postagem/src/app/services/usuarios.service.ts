import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlGetUsuario = 'http:'
  constructor(private http: HttpClient) { }
}
