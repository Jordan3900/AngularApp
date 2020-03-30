import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs";
import { IPeople } from "./model/people.model";
import { catchError, tap, map, pluck } from "rxjs/operators";

@Injectable()
export class PeopleService {
    constructor(private http: HttpClient) {

    }

    getPeople(): Observable<IPeople[]> {
        let apiData = this.http.get<IPeople[]>('https://reqres.in/api/users');
   
        return this.http.get<IPeople[]>('https://reqres.in/api/users').pipe(
            pluck('data'),
            tap(console.log)
        );
    }
    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => {
            debugger;
            console.error(error);
            return of(results as T);
        }
    }
}