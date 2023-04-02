import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes =
[
 
  {path:'',component:MainComponent,
  children:[
   {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default Page if empty
  {path:'Home',component:HomeComponent,title:'Home Page'},
    {path:'products',component:ProductComponent ,title:'products page'},
    {path:'category',component:CategoryComponent ,title:'products page'},
    {path:'order',component:OrderComponent , title:'order page'},
    {path:'productsDetails/:proId',component:ProductdetailsComponent},
  ]},

  {path:'**',component:NotFoundComponent} // wildcard

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
