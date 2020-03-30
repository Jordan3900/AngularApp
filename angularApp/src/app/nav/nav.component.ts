import { Component } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',

})
export class NavComponent {
  constructor(private auth: AuthService) {
    
  }
}