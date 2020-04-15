import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]> = this.usersService.users$;
  public length: number;

  constructor(private usersService: UsersService) {
  }

  public ngOnInit(): void {
    this.usersService.getUsers();
    this.users$.subscribe(users => {
      if (users) {
        this.length = users.length;
      }
    });

  }

  public sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.usersService.sortData(sort);
  }
}
