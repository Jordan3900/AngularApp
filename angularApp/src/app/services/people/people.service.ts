import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs";
import { IPeople } from "../../pages/people/model/people.model";
import { catchError, tap, map, pluck } from "rxjs/operators";

@Injectable()
export class PeopleService {
    readonly URL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {

    }

    getPeople(): Observable<IPeople[]> {   
        return this.http.get<IPeople[]>(this.URL).pipe(
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