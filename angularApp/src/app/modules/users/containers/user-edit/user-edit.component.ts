import { Component, OnInit, Output, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { User } from '../../../models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  public user: User;
  public editForm = this.fb.group({
    email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  private configClass: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['bg-success'],
    verticalPosition: 'top',
  };

  constructor(private router: ActivatedRoute, private usersService: UsersService,
    private snackBar: MatSnackBar, public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: User,
    public dialogRef: MatDialogRef<UserEditComponent>) { }

  ngOnInit() {
    this.user = this.data;
    this.editForm.controls['email'].setValue(this.user.email);
    this.editForm.controls['firstName'].setValue(this.user.firstName);
    this.editForm.controls['lastName'].setValue(this.user.lastName);
  }

  onSave(formValues): void {
    const body = {
      'firstName': formValues.firstName,
      'lastName': formValues.lastName,
      'email': formValues.email,
    };

    this.usersService.updateUser(this.user.id, body).subscribe(result => {
      if (result) {
        this.snackBar.open('Saved succesfully', 'X', this.configClass);
        this.dialogRef.close(result);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
