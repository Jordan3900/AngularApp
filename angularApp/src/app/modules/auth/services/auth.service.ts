import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private readonly logURL = 'https://reqres.in/api/login';
    private readonly regURL = 'https://reqres.in/api/register';

    constructor(private http: HttpClient, private router: Router) {
    }

    loginUser(email: string, password: string): void {
        const body = {
            'email': email,
            'password': password
        };

        this.http.post(this.logURL, body).subscribe(value => {
            if (value) {
                localStorage.setItem('token', value['token']);
                this.isLoginSubject.next(true);
                this.router.navigate(['home']);
            }
        });
    }

    registerUser(email: string, password: string, firstName: string, lastName: string): void {
        const body = {
            'email': email,
            'password': password,
            'fristName': firstName,
            'lastName': lastName
        };

        this.http.post(this.regURL, body).subscribe(value => {
            if (value) {
                this.router.navigate(['auth/login']);
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
