import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  salvarUsuario(dados: Usuario) {
    return this.httpClient.post('https://reqres.in/api/register',
      JSON.stringify(dados),
      {headers: this.headers})
  }
}
