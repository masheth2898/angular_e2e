import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material.module';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './pages/password/password.component';
import { HomeComponent } from './pages/home/home.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersListComponent,
    PasswordComponent,
    HomeComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
