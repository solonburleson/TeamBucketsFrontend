import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodoService } from '../todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodoService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.angularForm = this.fb.group({
      id: ['', Validators.required],
      todoDescr: ['', Validators.required ],
      dueDate: ['', Validators.required ],
      status: ['', Validators.required ],
      priority: ['', Validators.required ]
    });
  }

  onSubmit(id, todoDescr, dueDate, status, priority) {
    console.log(this.angularForm);
    this.todoService.addTodo(id, todoDescr, dueDate, status, priority);
  }

}
