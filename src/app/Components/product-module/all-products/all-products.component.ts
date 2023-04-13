import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icategory } from 'src/app/Model/icategory';
import { Iproduct } from 'src/app/Model/iproduct';
import { Iproductimage } from 'src/app/Model/iproductimage';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit, OnChanges {
  products: Iproduct[] = [];
  categories: Icategory[] = [];
  productsImage: Iproductimage[] = [];

  // receivedCatID: number = 0;
  selectedCatID: number = 0;

  @Input() productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.productService.getAllProducts().subscribe((data) => {
    //   this.products = data;
    //   console.log(data);
    // });
    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
    this.productService
      .getAllProductsImages(this.productId)
      .subscribe((data) => {
        this.productsImage = data;
        console.log(data);
      });





  }

  ngOnChanges(): void {



    // if (this.receivedCatID==0) {
    //   this.productService.getAllProducts().subscribe((data) => {
    //     this.products = data;
    //     console.log(data);
    //   });
    // } else {
    //   this.productService
    //     .getProductsByCatId(this.receivedCatID)
    //     .subscribe((data) => {
    //       this.products = data;
    //       console.log(data);

    //     });
    // }

  }

  prdDetails(prdId: number) {
    console.log(Number);
    this.router.navigate(['/product/productdetails/', prdId]);
  }

  getProductByID(prodId: number): Iproduct | undefined {
    return this.products.find((prd) => prd.id == prodId);
  }
}
