import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

  }

  logar(dadosLogin: Login) {
    return this.http.post(`https://reqres.in/api/login`,
      JSON.stringify(dadosLogin),
      {headers: this.headers});
  }
}
