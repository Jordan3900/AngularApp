import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public loginForm = this.fb.group({
    email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
    password: ['', Validators.required]
  });
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  login(formValues: any) {
    this.authService.loginUser(formValues.email, formValues.password);
  }
}
