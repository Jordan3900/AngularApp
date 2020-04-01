import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.model';
import { Observable } from 'rxjs';
import { UsersFacade } from '../../users.facade';

@Component({
  selector: 'app-user',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  length: number
  isUpdating: Observable<boolean>;

  constructor(private route: ActivatedRoute, private userFacade: UsersFacade) {
    this.isUpdating = userFacade.isUpdating();
  }

  ngOnInit() {
    this.userFacade.loadUsers().subscribe(users => {
      this.users = users
      this.length = users.length
    });
  }
}
