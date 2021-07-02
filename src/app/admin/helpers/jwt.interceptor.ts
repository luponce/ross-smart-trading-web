import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const usuario: any = JSON.parse(localStorage.getItem('user'));
    if (usuario !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${usuario.data.token}`
        }
      });
    }
    return next.handle(request);
  }
}
