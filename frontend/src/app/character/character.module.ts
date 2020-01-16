import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';
import {NgxSpinnerModule} from "ngx-spinner";

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
  ],
  declarations: [CharacterComponent]
})
export class CharacterModule { }
