import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post<any>(`${environment.api_URL}login`, login).pipe(
        map((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  // async autocomplete(value): Promise<Autocomplete> {
  //   return await this.http
  //       .get<Autocomplete>(
  //         `${environment.urlKomoot}api/?q=${value}`
  //       ).toPromise();
  // }
}
