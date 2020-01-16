import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  authenticate(form){
    console.log('subit form: ', form.value);

    this.authService
      .login(form.value)
      .subscribe( (resp)=> {
        console.log('LogOK', resp);
        this.router.navigate(['character']);
      }, (error1 => {
        console.log('Error: ', error1);
      }))
  }
}
