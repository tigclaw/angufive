
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UrlResolver } from '@angular/compiler';


const API_URL = environment.apiUrl;
class Comment {
  constructor(
    public id: Date,
    public author: string,
    public text: string
  ) { }
}

interface User {
  'id': number,
  'first_name': string;
  'last_name': string;
  'email': string;
  'gender': string;
  'ip_address': string;
}

@Injectable()
export class ApiServiceService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    // return Observable.of(CHARACTERS).delay(100);
    return this.http.get(`${API_URL}/users`)
    .map(result => {
      return result;
    });
  }
}
