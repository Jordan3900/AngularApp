import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modules/models/user.model';

@Pipe({
  name: 'usersFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], searchInput: string): User[] {

    if (!users) {
      return [];
    }
    if (!searchInput) {
      return users;
    }
    console.log(users);
    searchInput = searchInput.toLowerCase();
    var us = users.filter(u => {
      return u.fullName.toLowerCase().includes(searchInput);
    });
    debugger;
    return us;
  }
}
