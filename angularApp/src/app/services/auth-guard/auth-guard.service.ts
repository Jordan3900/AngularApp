import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

// Since you have authentication module, I think it would be better if you move this guard
// to the Auth module

@Injectable() // Please use the 'providedIn' property, 
//since this way you will be sure that the service is singleton
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  //Wouldn't it be better if the injected service in the constructor is actually called service?
  // authService instead of auth?

  canLoad(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }
}