import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'Register',component:RegisterComponent,title:'Register Page'},
  {path:'login',component:LoginComponent , title:'Login page'},
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IdentityModule { }
