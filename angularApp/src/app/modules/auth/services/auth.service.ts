import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/modules/core/services/alert.service';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    private readonly logURL = 'https://reqres.in/api/login';
    private readonly regURL = 'https://reqres.in/api/register';
    public isLoggedIn = this.hasToken();

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
                this.isLoggedInSubject.next(true);
                this.isLoggedIn = true;
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
        this.isLoggedInSubject.next(false);
        this.isLoggedIn = false;
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    private handleError<T>(operation = 'operation', results?: T): any {
        return (error: any): Observable<T> => {
            console.error(error, operation);
            this.alertService.error('Invalid Credentials!');
            return of(results as T);
        };
    }
}
