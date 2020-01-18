import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  todos = [
    {todo: 'Angular Layout', dueDate: '1/18', priority: 'High', status: true},
    {todo: 'Medium Test', dueDate: '1/18', priority: 'Medium', status: false},
    {todo: 'Low Test', dueDate: '1/18', priority: 'Low', status: false}
  ];
  constructor() { }

  ngOnInit() {
  }

}
