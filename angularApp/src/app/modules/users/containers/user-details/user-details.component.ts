import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public user: User;
  public id: number;
  public isLoading = true;

  constructor(public usersService: UsersService, private router: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.isLoading = false;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: this.user,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.first_name = result.firstName;
        this.user.last_name = result.lastName;
        this.user.email = result.email;
      }
    });
  }
}
