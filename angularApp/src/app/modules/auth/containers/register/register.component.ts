import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from './helpers/error-state-matcher.helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public matcher = new MyErrorStateMatcher();
  constructor(private authService: AuthService, private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }, {validators: this.checkPasswords});
  }

  ngOnInit() {

  }

  checkPasswords(group: FormGroup): any {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notMatch: true }
  }

  register(formValues: any): void {
    this.authService.registerUser(formValues.email, formValues.password, formValues.firstName, formValues.lastName);
  }
}
