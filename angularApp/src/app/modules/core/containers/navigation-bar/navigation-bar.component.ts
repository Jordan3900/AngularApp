import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent {
  public isLoggedIn = this.authService.isLoggedInSubject.asObservable();

  constructor(private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
