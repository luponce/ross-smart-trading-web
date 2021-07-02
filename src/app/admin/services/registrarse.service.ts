import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  constructor(private http: HttpClient) { }

  registrarse(usuario: Usuario) {
    return this.http.post<any>(`${environment.api_URL}register`, usuario).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      })
    );;
  }
}
