import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../models/user.model';
import { UsersService } from '../../services/users/users.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  public length: number;
  public isLoading: boolean;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getUsers().subscribe(data => {
      this.length = data.length;
      console.log(data)
      this.users = data;
      this.isLoading = false;
    });
  }
}
