import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemService } from './services/item.service';

@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {

  constructor(private itemService:ItemService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.itemService.getToken();
    if(token && token !== '')
    {
      const tokenreq = request.clone({
        headers:request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(tokenreq)
    }
    return next.handle(request);
  }
}

