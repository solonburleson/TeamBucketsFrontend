import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-accountant-todos',
  templateUrl: './accountant-todos.component.html',
  styleUrls: ['./accountant-todos.component.css']
})
export class AccountantTodosComponent implements OnInit {
  user: User;
  name: string;

  constructor(private userService: UserService, private router: Router) {
    this.name = 'Accountant';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

}
