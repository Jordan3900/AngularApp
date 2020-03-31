import { Injectable } from '@angular/core';
import { IUser } from '../../pages/login/model/user.model';

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, lastName: string) {
        this.currentUser = {
            id: 1,
            email: 'some@mail.com',
            userName: userName,
            firstName: 'Slim',
            lastName: 'Shady'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}