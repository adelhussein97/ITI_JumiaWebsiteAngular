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
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes =
[
 
  {path:'',component:MainComponent,
  children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default Page if empty
    {path:'Home',component:HomeComponent,title:'Home Page'},
    {path:'register',component:RegisterComponent,title:'Register Page'},
    {path:'login',component:LoginComponent , title:'Login page'},
    {path:'contact',component:ContactComponent,title:'Contact Page'},
    {path:'products',component:ProductComponent ,title:'products page'},
    {path:'category',component:CategoryComponent ,title:'Category page'},
    {path:'order',component:OrderComponent , title:'order page'},
    {path:'productsDetails/:proId',component:ProductdetailsComponent}
  ]},

  {path:'**',component:NotFoundComponent} // wildcard

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
