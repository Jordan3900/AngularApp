import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(public authService: AuthService, public router: Router) { }

  public canLoad(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
