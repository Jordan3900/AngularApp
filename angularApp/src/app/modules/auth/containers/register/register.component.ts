import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  checkPasswords(formValue: any): boolean {
    let password = formValue.password;
    let confirmPass = formValue.confirmPassword;
    const passwordMatch = password === confirmPass;
    
    this.registerForm.setErrors({'notMatch': !passwordMatch});

    return passwordMatch;
  }

  register(formValues: any): void {
    this.authService.registerUser(formValues.email, formValues.password, formValues.firstName, formValues.lastName);
  }
}
