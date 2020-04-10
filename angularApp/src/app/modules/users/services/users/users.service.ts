import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user.model';
import { catchError, pluck, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    readonly usersURL = 'https://reqres.in/api/users?delay=3';
    readonly userURL = 'https://reqres.in/api/users/';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get(this.usersURL).pipe(
            catchError(this.handleError<User[]>('getUsers', [])),
            pluck('data')
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.userURL + `${id}`).pipe(
            catchError(this.handleError<User>('getUser')),
            pluck('data'),
        );
    }

    updateUser(id: number, body: any): Observable<User> {
        return this.http.put<User>(this.userURL + `${id}`, body).pipe(
            catchError(this.handleError<User>('updateUser'))
        );
    }

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error, operation);
            return of(results as T);
        };
    }
}
