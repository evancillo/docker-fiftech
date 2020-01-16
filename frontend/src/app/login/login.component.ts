import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  authenticate(form){
    this.spinner.show();
    this.authService
      .login(form.value)
      .subscribe( (resp)=> {
        setTimeout(()=>{
          this.spinner.hide();
          this.router.navigate(['character']);
        }, 1000);

      }, (error1 => {
        setTimeout(()=>{
          this.spinner.hide();
          console.log('Error: ', error1)
        }, 1000);
      }))
  }
}
