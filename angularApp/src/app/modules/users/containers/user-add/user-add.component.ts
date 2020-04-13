import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/modules/models/user.model';
import { UsersService } from '../../services/users/users.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public user: User;
  public addForm = this.fb.group({
    email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    picture: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private usersService: UsersService, private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
  }

  onAdd(formValues) {
    const body = {
      'firstName': formValues.firstName,
      'lastName': formValues.lastName,
      'email': formValues.email,
      'picture': formValues.picture,
    };

    this.usersService.addUser(body).subscribe(result => {
      if (result) {
        this.alertService.success(`Successfully added ${result.firstName} !`);
        this.router.navigate(['users/list']);
      }
    });
  }
}
