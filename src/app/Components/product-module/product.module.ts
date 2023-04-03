import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'',redirectTo:'/product/allproducts',pathMatch:'full'},
  {path:'productdetails',component:ProductdetailsComponent ,title:'ProductDetails'},
  {path:'allproducts',component:AllProductsComponent,title:'AllProducts'},

]

@NgModule({
  declarations: [
    ProductdetailsComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
