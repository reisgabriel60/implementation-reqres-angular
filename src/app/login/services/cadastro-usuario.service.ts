import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private httpClient: HttpClient) { }

  salvarUsuario(dados: Usuario) {
    this.httpClient.post('', dados, {})
  }
}
