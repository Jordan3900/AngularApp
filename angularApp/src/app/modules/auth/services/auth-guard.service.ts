import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanLoad {
  constructor(public authService: AuthService, public router: Router) {}

  canLoad(): boolean {
    if (!this.authService.isLoginSubject.value) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }
}
