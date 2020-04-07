import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user.model';
import { catchError, tap, map, pluck, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    readonly usersURL = 'https://reqres.in/api/users?delay=3';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersURL).pipe(
            catchError(this.handleError<User[]>('getUsers', [])),
            pluck('data')
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`https://reqres.in/api/users/${id}`).pipe(
            catchError(this.handleError<User>('getUser')),
            pluck('data'),
        );
    }

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(results as T);
        };

    }
}
