import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  name: string;
  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
    this.name = this.authService.currentUser.fullName;
  }

}
