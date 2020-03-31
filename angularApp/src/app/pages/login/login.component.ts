import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService, private router: Router) {

  }

  login(formValues) {
    this.auth.loginUser(formValues.email, formValues.password);
    this.router.navigate(['home']);
  }
}
