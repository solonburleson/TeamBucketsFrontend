import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo-service.service';
import Todo from '../Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      console.log(data);
      this.todos = data;
    });
  }

}
