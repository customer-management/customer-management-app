import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestEndpoints} from './rest-endpoints';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustManagerService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(RestEndpoints.HOST + url);
  }
  post(url: string, data: any): Observable<any> {
    return this.http.post((RestEndpoints.HOST + url), data);
  }
}
