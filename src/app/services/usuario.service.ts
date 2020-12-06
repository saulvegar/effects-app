import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [];
  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
          .pipe(
            map(resp => resp['data'])
          );
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
          .pipe(
            map(resp => resp['data'])
          );
  }
}
