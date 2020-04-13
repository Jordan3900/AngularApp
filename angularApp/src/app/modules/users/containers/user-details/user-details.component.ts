import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public usersService: UsersService, private activatedRoute: ActivatedRoute,
     public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.isLoading = false;
    });
  }

  onDelete(): void {
    this.usersService.deleteUser(this.id).subscribe(() => {
      this.router.navigate(['users/list']);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: this.user,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.firstName = result.firstName;
        this.user.lastName = result.lastName;
        this.user.email = result.email;
      }
    });
  }
}
