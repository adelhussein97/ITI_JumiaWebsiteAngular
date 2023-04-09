import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';




@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  constructor(private auth:AuthServicesService)  {}
  ngOnInit() {


  }
productDetailsArray=[
  {
    Id:"1",
    img:"../assets/images/8.jpg",
    Name:"T-Shirt",
    Discount:"50%",
    Discription:"This T Matrial Is good",
    UnitPrice:"100",
    Date:"18/4/2023",
    IsFeatured:"NoN",
    Brand:"adidas",
    Quantity:"10"
  },  {
    Id:"3",
    img:"../assets/images/6.jpg",
    Name:"T-Shirt",
    Discount:"50%",
    Discription:"This T Matrial Is good",
    UnitPrice:"300",
    Date:"18/4/2023",
    IsFeatured:"NoN",
    Brand:"adidas",
    Quantity:"10"
  },  {
    Id:"4",
    img:"../assets/images/7.jpg",
    Name:"T-Shirt",
    Discount:"50%",
    Discription:"This T Matrial Is good",
    UnitPrice:"200",
    Date:"18/4/2023",
    IsFeatured:"NoN",
    Brand:"adidas",
    Quantity:"10"
  }
];
inc(prod:any){
  // console.log(prod.Quantity);
  if(prod.Quantity != 10)
  prod.Quantity+=1;
}

dec(prod:any){
  // console.log(prod.Quantity);
  if (prod.Quantity !=1) {
    
    prod.Quantity-=1;
  }
  
}
itemcart:any=[];
 addCart(category:any){
  let cartDataNull=localStorage.getItem('localCart');
  if(cartDataNull==null){
    let storeDataGet:any=[];
    storeDataGet.push(category);
    localStorage.setItem('localCart',JSON.stringify(storeDataGet));

  }else{
    var id=category.Id;
    let index:number=-1;
    this.itemcart=JSON.parse(localStorage.getItem('localCart')!);
    for(let i=0 ;i<this.itemcart.length;i++){
      if (parseInt(id) ===parseInt(this.itemcart[i].Id)) {
        this.itemcart[i].Quantity=category.Quantity;
        index=i;
        break;
      }
      if (index ==-1) {
        this.itemcart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemcart))
      }else{
        localStorage.setItem('localCart',JSON.stringify(this.itemcart))

      }
    }
  }
  this.cartNumberFun();
}
cartNumber:number=0;
 cartNumberFun(){
  var cartValue=JSON.parse(localStorage.getItem('localCart')!);
 this.cartNumber= cartValue.length;
 this.auth.cartSubject.next(this.cartNumber);
 
 }
 }

