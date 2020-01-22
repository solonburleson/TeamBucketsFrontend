import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PriorityListComponent } from './priority-list/priority-list.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TellerTodosComponent } from './teller-todos/teller-todos.component';
import { AccountantTodosComponent } from './accountant-todos/accountant-todos.component';
import { BranchManagerTodosComponent } from './branch-manager-todos/branch-manager-todos.component';
import { LoanOfficerTodosComponent } from './loan-officer-todos/loan-officer-todos.component';

const routes: Routes = [
  {path: 'todo/create', component: TodosAddComponent},
  {path: 'todo/edit/:id', component: TodosEditComponent},
  {path: 'todos', component: TodosListComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'accountant/todos', component: AccountantTodosComponent},
  {path: 'branch-manager/todos', component: BranchManagerTodosComponent},
  {path: 'loan-officer/todos', component: LoanOfficerTodosComponent},
  {path: 'teller/todos', component: TellerTodosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PriorityListComponent,
    RegisterUserComponent,
    TodosAddComponent,
    TodosEditComponent,
    TodosListComponent,
    SlideshowComponent,
    HomeComponent,
    TellerTodosComponent,
    AccountantTodosComponent,
    BranchManagerTodosComponent,
    LoanOfficerTodosComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
