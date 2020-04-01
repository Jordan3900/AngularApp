import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable()
export class UsersState {

    private updating = new BehaviorSubject<boolean>(false);
    private users = new BehaviorSubject<IUser[]>(null);
  
    isUpdating() {
      return this.updating.asObservable();
    }
  
    setUpdating(isUpdating: boolean) {
      this.updating.next(isUpdating);
    }
  
    getUsers() {
      return this.users.asObservable();
    }

    setUsers(users: IUser[]) {
      this.users.next(users);
    }
}
