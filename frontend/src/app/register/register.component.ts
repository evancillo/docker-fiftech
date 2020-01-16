import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private spinner: NgxSpinnerService ) { }

  ngOnInit() {
  }

  register(form){
    this.spinner.show();
    this.registerService
      .register(form.value)
      .subscribe((resp) =>{
        setTimeout(()=>{
          this.spinner.hide();
          this.router.navigate(['login']);
        }, 1000);
      }, (error1 => {

      }))
  }
}
