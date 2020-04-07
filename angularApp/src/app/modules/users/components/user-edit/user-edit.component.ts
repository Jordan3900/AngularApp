import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editForm: FormGroup;
  public email: FormControl;
  public firstName: FormControl;
  public lastName: FormControl;
  user: User;
  id: number;
  private configClass: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['bg-success'],
    verticalPosition: 'top',
};

  constructor(private router: ActivatedRoute, private usersService: UsersService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);

    this.id = this.router.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.email.setValue(this.user.email);
      this.firstName.setValue(this.user.first_name);
      this.lastName.setValue(this.user.last_name);
    });

    this.editForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  onSave(formValues) {
    console.log(formValues);
    this.user.first_name = formValues.firstName;
    this.user.last_name = formValues.lastName;
    this.user.email = formValues.email;

    this.snackBar.open('Saved succesfully', 'X', this.configClass);
  }
}
