import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBooklistComponent } from './user-booklist/user-booklist.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    UserBooklistComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
