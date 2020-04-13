import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private readonly logURL = 'https://reqres.in/api/login';
    private readonly regURL = 'https://reqres.in/api/register';

    constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
    }

    loginUser(email: string, password: string): void {
        const body = {
            'email': email,
            'password': password
        };

        this.http.post(this.logURL, body).pipe(
            catchError(this.handleError('loginUser'))
        ).subscribe(value => {
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

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error, operation);
            this.alertService.error('Invalid Credentials!');
            return of(results as T);
        };
    }
}
