import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericsComponent } from './generics/generics.component';
import { LoginFormComponent } from './generics/login-form/login-form.component';
import { TableComponent } from './generics/table/table.component';
import { RegistrationFormComponent } from './generics/registration-form/registration-form.component';
import { TodoFormComponent } from './generics/todo-form/todo-form.component';
import { NavbarComponent } from './generics/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericsComponent,
    LoginFormComponent,
    TableComponent,
    RegistrationFormComponent,
    TodoFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
