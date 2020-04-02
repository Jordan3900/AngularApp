import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Why do you need different folders for the services? 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(url: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = headers || new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    const options = { headers: headers };

    return this.http.post(url, body, { ...options, responseType: 'json' })
  }
}

