import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:8080/api/todos';
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.uri}`);
  }
}