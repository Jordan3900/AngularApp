import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../modules/users/models/user.model';

@Pipe({
  name: 'usersFilter'
})
export class UserFilterPipe implements PipeTransform {

  public transform(users: User[], searchInput: string): User[] {

    if (!users) {
      return [];
    }
    if (!searchInput) {
      return users;
    }

    searchInput = searchInput.toLowerCase();
    const filtredUsers = users.filter(u => {
      return u.fullName.toLowerCase().includes(searchInput) || u.email.toLowerCase().includes(searchInput);
    });

    return filtredUsers;
  }
}
