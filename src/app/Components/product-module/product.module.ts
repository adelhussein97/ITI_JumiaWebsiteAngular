import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule, Routes } from '@angular/router';
import { ListviewProductComponent } from './listview-product/listview-product.component';

const routes: Routes =[
  {path:'',redirectTo:'/product/allproducts',pathMatch:'full'},
  {path:'productdetails/:pid',component:ProductdetailsComponent ,title:'ProductDetails'},
  {path:'allproducts',component:AllProductsComponent,title:'AllProducts'},
  {path:'listview',component:ListviewProductComponent,title:'AllProducts'},

]

@NgModule({
  declarations: [
    ProductdetailsComponent,
    AllProductsComponent,
    ListviewProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
