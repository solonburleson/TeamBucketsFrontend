import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todos.service';
import Todo from '../todo';

@Component({
  selector: 'app-todos-test',
  templateUrl: './todos-test.component.html',
  styleUrls: ['./todos-test.component.css']
})
export class TodosTestComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      console.log(data);
      this.todos = data;
    });
  }

}
