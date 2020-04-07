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
  @Input() users: Observable<User[]>;
  length: number;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.users = this.usersService.getUsers().pipe(tap(data => {
      this.length = data.length,
      this.isLoading = false;
    }));
  }
}
