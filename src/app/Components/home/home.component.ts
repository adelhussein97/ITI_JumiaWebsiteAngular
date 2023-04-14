import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { Icategory } from 'src/app/Model/icategory';
import { Iproduct } from 'src/app/Model/iproduct';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Icategory[] = [];
  iproducts: Iproduct[] = [];
  constructor(private categor: ProductApiService, private router: Router) {}

  prdDetails(prdId: number) {
    console.log(Number);
    this.router.navigate(['/product/productdetails/', prdId]);
  }

  ngOnInit(): void {
    this.categor.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.categories.length = 12;
    });
    this.categor.GetProductsWithImgs().subscribe((data) => {
      this.iproducts = data;
      this.iproducts.length = 3;
    });
  }
}
