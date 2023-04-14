import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Model/iproduct';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Location } from '@angular/common';
import { Iproductimage } from 'src/app/Model/iproductimage';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  prod: Iproduct = {} as Iproduct;
  imgurl: Iproductimage[] = [];

  currentproductid: number = 0;
  currentproductimgid: number = 0;

  // prod:Iproduct|undefined =undefined;
  constructor(
    private auth: AuthServicesService,
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private location: Location
  ) {}
  ngOnInit() {
    // let prodid=this.route.snapshot.paramMap.get('pid');
    // console.log(prodid);

    this.currentproductid = this.route.snapshot.paramMap.get('pid')
      ? Number(this.route.snapshot.paramMap.get('pid'))
      : 0;

    let returnprod = this.productService
      .getProductsById(this.currentproductid)
      .subscribe((data) => {
        this.prod = data;
      });

    // let returnprodimg = this.productService
    //   .getProductImageById(this.currentproductimgid)
    //   .subscribe((data) => {
    //     this.imgurl = data;
    //   });

    // if (returnprod) {
    //   //  this.prod=returnprod
    // } else {
    //   alert('Product Not Found');
    //   this.location.back();
    // }

    // if (returnprodimg) {
    //   //  this.imgurl=returnprod
    // } else {
    //   alert('Product Not Found');
    //   this.location.back();
    // }
  }

  inc(prod: any) {
    // console.log(prod.Quantity);
    if (prod.quantity != 10) prod.quantity += 1;
  }

  dec(prod: any) {
    // console.log(prod.Quantity);
    if (prod.quantity != 1) {
      prod.quantity -= 1;
    }
  }
  itemcart: any = [];
  addCart(category: any) {
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    } else {
      var id = category.id;
      let index: number = -1;
      this.itemcart = JSON.parse(localStorage.getItem('localCart')!);

      for (let i = 0; i < this.itemcart.length; i++) {
        if (parseInt(id) === parseInt(this.itemcart[i].id)) {
          this.itemcart[i].Quantity = category.Quantity;
          index = i;
          break;
        }
        if (index == -1) {
          this.itemcart.push(category);
          localStorage.setItem('localCart', JSON.stringify(this.itemcart));
        } else {
          localStorage.setItem('localCart', JSON.stringify(this.itemcart));
        }
      }
    }
    this.cartNumberFun();
  }
  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
