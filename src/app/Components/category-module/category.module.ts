import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'category',component:CategoryComponent,title:'category Page'},

]

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
