import { Injectable } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _auth: AuthServicesService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let AuthService = this._auth.getToken();
    let TokenRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthService}`,
      },
    });
    return next.handle(TokenRequest);
  }
}
