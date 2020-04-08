import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = headers || new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    const options = { headers: headers };

    return this.http.post(url, body, { ...options, responseType: 'json' });
  }

  put(url: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = headers || new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    const options = { headers: headers };

    return this.http.put(url, body, { ...options, responseType: 'json' });
  }
}

