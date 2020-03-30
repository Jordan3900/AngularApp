import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`form { width: 50%;margin: auto; color: white;}`]
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {

  }

  login(formValues) {
    this.auth.loginUser(formValues.email, formValues.password);
    this.router.navigate(['home']);
  }
}
