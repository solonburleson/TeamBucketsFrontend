import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TodoService} from '../todos.service';
import User from '../user';
import Todo from '../todo';

@Component({
  selector: 'app-accountant-todos',
  templateUrl: './accountant-todos.component.html',
  styleUrls: ['./accountant-todos.component.css']
})
export class AccountantTodosComponent implements OnInit {
  user: User = {id:0, username:'', password:'', todos:[]};
  name: string;
  todos: Todo[];

  constructor(private userService: UserService, private router: Router, private todoService: TodoService) {
    this.name = 'Teller';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    })

    this.todoService.getTodos().subscribe((data) => {
      console.log(data);
      this.todos = data;
    })
  }

  deleteTodo(id) {
    console.log('delete product id= ' + id);
    this.todoService.deleteTodo(id).subscribe(res => {
      console.log('delete res= ' + res);
      // console.log(this.products);
      // this.products.splice(id, 1);
      // this.router.navigate(['products']);
      this.userService.getUserByName(this.name).subscribe((data:any) => {
        console.log(data);
        this.user = data;
      });
    });
  }

}
