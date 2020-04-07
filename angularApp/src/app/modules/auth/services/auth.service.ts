import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    currentUser: User;
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    readonly URL = 'https://reqres.in/api/login';

    constructor(private httpService: HttpService, private router: Router) {
        this.currentUser = {
            id: 1,
            email: '',
            userName: 'Slim Shady',
            password: '',
            first_name: 'Slim',
            last_name: 'Shady',
            fullName: 'Slim Shady'
        };
    }

    loginUser(email: string, password: string): void {
        this.currentUser.email = email;
        this.currentUser.password = password;

        const body = {
            'email': 'eve.holt@reqres.in',
            'password': 'cityslicka'
        };

        this.httpService.post(this.URL, body).subscribe(value => {
            if (value) {
                localStorage.setItem('token', value.token);
                this.isLoginSubject.next(true);
                this.router.navigate(['home']);
            }
        });

    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['home']);
        this.isLoginSubject.next(false);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }
}
