import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {RegisterForm} from "./register-form";
import {API_URL} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(registerForm: RegisterForm): Observable <any> {
    return this.httpClient.post(
      API_URL + '/api/user', registerForm
    )
  }
}
