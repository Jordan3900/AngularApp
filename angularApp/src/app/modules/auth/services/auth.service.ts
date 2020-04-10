import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private readonly URL = 'https://reqres.in/api/login';

    constructor(private http: HttpClient, private router: Router) {
    }

    loginUser(email: string, password: string): void {
        debugger;
        const body = {
            'email': email,
            'password': password
        };

        this.http.post(this.URL, body).subscribe(value => {
            if (value) {
                localStorage.setItem('token', value['token']);
                this.isLoginSubject.next(true);
                this.router.navigate(['home']);
            }
        });
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['auth/login']);
        this.isLoginSubject.next(false);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }
}
