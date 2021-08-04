import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/login.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User = JSON.parse(localStorage.getItem('user')!);
    if (currentUser?.token !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token }`
        }
      });
    }
    return next.handle(request);
  }
}
