import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-branch-manager-todos',
  templateUrl: './branch-manager-todos.component.html',
  styleUrls: ['./branch-manager-todos.component.css']
})
export class BranchManagerTodosComponent implements OnInit {
  user: User;
  name: string;

  constructor(private userService: UserService, private router: Router) {
    this.name = 'Branch Manager';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

}
