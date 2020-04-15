import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  public length: number;

  constructor(private usersService: UsersService) {
  }

  public sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.users = this.users.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      return (a.firstName < b.firstName ? -1 : 1) * (isAsc ? 1 : -1);
    });
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.length = data.length;
      this.users = data;
    });
  }
}
