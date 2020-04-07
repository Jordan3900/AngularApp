import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  id: number;
  isLoading = true;

  constructor(public usersService: UsersService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe(user => {
      this.user = user;
      console.log(user);
      this.isLoading = false;
    });
  }

}
