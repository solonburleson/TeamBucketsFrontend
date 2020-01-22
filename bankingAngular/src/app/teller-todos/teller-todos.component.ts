import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-teller-todos',
  templateUrl: './teller-todos.component.html',
  styleUrls: ['./teller-todos.component.css']
})
export class TellerTodosComponent implements OnInit {
  user: User;
  name: string;

  constructor(private userService: UserService, private router: Router) {
    this.name = 'Teller';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }

}
