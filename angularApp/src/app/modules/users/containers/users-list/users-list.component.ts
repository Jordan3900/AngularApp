import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  public length: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.length = data.length;
      this.users = data;
    });
  }
}
