import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
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