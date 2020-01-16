import {Inject, Injectable} from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment, API_URL } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { LoginForm } from '../login/login-form';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private  httpClient: HttpClient) { }

  login(loginForm: LoginForm): Observable <any> {
    return this.httpClient.post(
      API_URL + '/api/auth', loginForm
    ).pipe( tap( data => {
      this.storage.set('AUTH_TOKEN', data.token.toString());
    }));
  }

  logout() {
    return this.storage.remove('AUTH_TOKEN');
  }
}
