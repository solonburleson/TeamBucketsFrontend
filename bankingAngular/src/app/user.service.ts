import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:8080/api/users';
  }

  getUsers(): User {
    return this.http.get<User[]>(`${this.uri}`)
  }
}
