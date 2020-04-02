import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    currentUser: IUser;
    isLogged: boolean = false;
    readonly URL = 'https://reqres.in/api/login';

    constructor(private httpService: HttpService)  {
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            email: 'eve.holt@reqres.in',
            userName: userName,
            password: 'cityslicka',
            firstName: 'Slim',
            lastName: 'Shady',
            fullName: 'Silm Shady'
        }

        const body = {
            "email": this.currentUser.email,
            "password": this.currentUser.password
        }
      
         this.httpService.post(this.URL, body).subscribe(token => {
             if (token) {
                 this.isLogged = true;
             }
         });
    }

    logout() {
        this.isLogged = false;
    }

    isAuthenticated() {
        return this.isLogged;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}