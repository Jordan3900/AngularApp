import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs";
import {IUser } from '../../models/user.model'
import { catchError, tap, map, pluck } from "rxjs/operators";

@Injectable()
export class UsersService {
    readonly URL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {

    }

    getUsers(): Observable<IUser[]> {   
        return this.http.get<IUser[]>(this.URL).pipe(
            pluck('data'),
            tap(console.log)
        );
    }
    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(results as T);
        }
    }
}