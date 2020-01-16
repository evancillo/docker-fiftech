import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router ) { }

  ngOnInit() {
  }

  register(form){
    this.registerService
      .register(form.value)
      .subscribe((resp) =>{
        this.router.navigate(['login']);
      }, (error1 => {

      }))
  }
}
