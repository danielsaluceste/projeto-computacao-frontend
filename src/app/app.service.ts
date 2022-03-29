import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var apiReq;

    if (req.url.includes('http://') || req.url.includes('https://')) {
      apiReq = req.clone({ url: req.url });
    } else {
      apiReq = req.clone({ url: environment.apiUrl + `/${req.url}` });
    }

    return next.handle(apiReq);
  }
}