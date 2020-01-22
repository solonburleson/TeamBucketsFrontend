import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-loan-officer-todos',
  templateUrl: './loan-officer-todos.component.html',
  styleUrls: ['./loan-officer-todos.component.css']
})
export class LoanOfficerTodosComponent implements OnInit {
  user: User;
  name: string;

  constructor(private userService: UserService, private router: Router) {
    this.name = 'Loan Officer';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }

}
