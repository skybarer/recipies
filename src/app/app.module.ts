import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminModule } from './admin/admin.module';
import { AdminLoginService } from './admin/admin-login/admin-login.service';
import { AdminRecipeCrudService } from './admin/admin-recipe-crud/admin-recipe-crud.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    AdminModule,

  ],
  providers: [
    AdminLoginService,
    AdminRecipeCrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
