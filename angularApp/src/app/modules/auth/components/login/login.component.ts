import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private email: FormControl
  private password: FormControl

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  login(formValues) {
    this.auth.loginUser(formValues.email, formValues.password);
    this.router.navigate(['home']);
  }
}
