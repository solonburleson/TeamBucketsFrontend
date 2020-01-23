import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri: string;
  roleUri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:8080/api/users';
    this.roleUri = 'http://localhost:8080/api/users/name';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.uri}`);
  }
  
  getUserByName(name): Observable<User> {
    return this.http.get<User>(`${this.roleUri}/${name}`);
  }
}
