import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { catchError, pluck, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsConstants } from 'src/app/shared/constants/api-url.constants';
import { Sort } from '@angular/material/sort';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private users$$ = new BehaviorSubject<User[]>([]);
    public users$ = this.users$$.asObservable();

    constructor(private http: HttpClient) {
    }

    public getUsers(): void {
        this.http.get(ApiUrlsConstants.usersUrl).pipe(
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
        ).subscribe(users => {
            if (users) {
                this.users$$.next(users);
            }
        });
    }

    public getUser(id: number): Observable<User> {
        return this.http.get<User>(ApiUrlsConstants.userUrl + `${id}`).pipe(
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

    public updateUser(id: number, body: any): Observable<User> {
        return this.http.put<User>(ApiUrlsConstants.userUrl + `${id}`, body).pipe(
            catchError(this.handleError<User>('updateUser'))
        );
    }

    public addUser(body: any): Observable<User> {
        return this.http.post<User>(ApiUrlsConstants.userUrl, body).pipe(
            catchError(this.handleError<User>('addUser'))
        );
    }

    public deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(ApiUrlsConstants.userUrl + `${id}`).pipe(
            catchError(this.handleError('updateUser')),
        );
    }

    public sortData(sort: Sort): void {
        if (!sort.active || sort.direction === '') {
            return;
        }

        let users = this.users$$.getValue();
        users = users.sort((a, b) => {
            const isAsc = sort.direction === 'asc';

            return (a.firstName < b.firstName ? -1 : 1) * (isAsc ? 1 : -1);
        });

        this.users$$.next(users);
    }

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            console.error(error, operation);
            return of(results as T);
        };
    }
}
