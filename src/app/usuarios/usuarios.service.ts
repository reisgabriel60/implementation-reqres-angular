import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

export interface UsersData {
 page: number;
 per_page: number;
 total: number;
 total_pages: number;
 data: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public retornaListaUsuarios(page: number, size: number): Observable<UsersData> {
    return this.http.get<UsersData>('https://reqres.in/api/users',
      {
        params: new HttpParams()
          .set('page', page)
          .set('per_page', size)
      }).pipe(
      map((usersData: UsersData) => usersData),
      catchError(err => throwError(err))
    );
  }
}
