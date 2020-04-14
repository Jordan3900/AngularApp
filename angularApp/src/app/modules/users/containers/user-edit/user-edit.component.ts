import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/modules/core/services/alert.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  public editForm = this.fb.group({
    email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private router: ActivatedRoute, private usersService: UsersService,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public user: User,
    public dialogRef: MatDialogRef<UserEditComponent>, private alertService: AlertService) { }

  ngOnInit() {
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
        this.alertService.success('Successfully edited!');
        this.dialogRef.close(result);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
