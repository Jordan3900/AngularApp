import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../users/models/user.model';
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
            pluck('data'),
            map((users: any[]) => {
                return users.map(user => {
                    return {
                        firstName: user.first_name,
                        lastName: user.last_name,
                        email: user.email,
                        id: user.id,
                        avatar: user.avatar,
                        fullName: `${user.first_name} ${user.last_name}`
                    } as User;
                });
            })
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.userURL + `${id}`).pipe(
            catchError(this.handleError<User>('getUser')),
            pluck('data'),
            map((user: any) => {
                return {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    id: user.id,
                    avatar: user.avatar,
                    fullName: `${user.first_name} ${user.last_name}`
                } as User;
            })
        );
    }

    updateUser(id: number, body: any): Observable<User> {
        return this.http.put<User>(this.userURL + `${id}`, body).pipe(
            catchError(this.handleError<User>('updateUser'))
        );
    }

    addUser(body: any): Observable<User> {
        return this.http.post<User>(this.userURL, body).pipe(
            catchError(this.handleError<User>('addUser'))
        );
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(this.userURL + `${id}`).pipe(
            catchError(this.handleError('updateUser')),
        );
    }

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error, operation);
            return of(results as T);
        };
    }
}
