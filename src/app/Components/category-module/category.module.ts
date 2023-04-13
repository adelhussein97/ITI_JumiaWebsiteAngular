
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes : Routes = [
  {path:'category',component:CategoryComponent,title:'category Page'},

]

@NgModule({
  declarations: [
    // CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryModule { }
