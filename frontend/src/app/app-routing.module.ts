import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./providers/auth.interceptor";

const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full' },
  { path: 'character', loadChildren: './character/character.module#CharacterModule'},
  { path: 'login', loadChildren:'./login/login.module#LoginModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class AppRoutingModule { }
