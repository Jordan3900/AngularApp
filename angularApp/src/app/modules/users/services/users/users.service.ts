import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user.model';
import { catchError, tap, map, pluck } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class UsersService {
    readonly URL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.URL).pipe(
            catchError(this.handleError<User[]>('getUsers', [])),
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
