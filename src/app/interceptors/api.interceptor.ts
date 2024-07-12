import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (req.url.includes('white_')) {
      const requestClone = req.clone({ url: this.cleanWhiteUrl(req.url) });
      return next.handle(requestClone);
    }

    const headers = req.headers.set(
      'Autorization',
      localStorage.getItem('token')!,
    );
    const requestClone = req.clone({ headers });

    return next.handle(requestClone);
  }

  private cleanWhiteUrl(url: string) {
    return url.replace('white_', '');
  }
}
