import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path:'contact',component:ContactComponent,title:'Contact Page'},

]
@NgModule({
  declarations: [
    ContactComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule { }
