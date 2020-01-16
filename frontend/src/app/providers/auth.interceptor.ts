import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable, throwError, from} from 'rxjs';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.storage.get('AUTH_TOKEN');
    if (token) {
      request = request.clone(
        {
          setHeaders: {'x-auth-token': token.toString()}
        });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone(
        {
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['login']);
        }
      }));
  }
}
