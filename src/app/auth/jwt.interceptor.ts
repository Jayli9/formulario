import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = "eyJhbGciOiJIUzI1NiJ9.eyJjb2RpZ28iOjEwNjkwMTMsImlkZW50aWZpY2FjaW9uIjoiamF2aWVyLmd1YW5vbHVpc2EiLCJleHAiOjE2OTQ3MTI5NjYsImp0aSI6ImMwNjVlMDRjLThiMTktNDY3OC1iYTc1LWQ0ZGUwYTMzM2EzNiJ9.1A_KRHGRDg26Czgsr21P5_vX4yyftKXOQXCURhLyzio";
    const isApiUrl = request.url.startsWith(environment.url_seguridades);//colocar aqui las url ha interceptar para enviar cabecera
    const isApiUrlCatalogo = request.url.startsWith(environment.url_catalogo);//colocar aqui las url ha interceptar para enviar cabecera

    if ((isApiUrl || isApiUrlCatalogo)) {//agregar url a interceptar
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser}`
        }
      });
    }

    return next.handle(request);
  }

}
