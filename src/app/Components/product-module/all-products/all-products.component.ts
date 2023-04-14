import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icategory } from 'src/app/Model/icategory';
import { Iproduct } from 'src/app/Model/iproduct';
import { Iproductimage } from 'src/app/Model/iproductimage';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit, OnChanges {
  products: Iproduct[] = [];
  categories: Icategory[] = [];
  productsImage: Iproductimage[] = [];

  @Input() receivedCatID: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.GetProductsWithImgs().subscribe((data2) => {
      this.products = data2;
      console.log(this.products);
    });

    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });

    // this.productService.getAllProductsImages().subscribe((data) => {
    //   this.productsImage = data;
    // });
    // this.productService.getAllProducts().subscribe((data) => {
    //   this.products = data;
    //   for (let index = 0; index < this.products.length; index++) {
    //     if (this.products[index].id == this.productsImage[index].productId) {
    //       this.products[index].prdImages = this.productsImage[index].url;
    //       this.productsWithImgs.push(this.products[index]);
    //       console.log(this.productsWithImgs);
    //     }
    //   }
    // });
  }

  ngOnChanges(): void {
    if (this.receivedCatID == 0) {
      this.productService.getAllProducts().subscribe((data1) => {
        this.products = data1;
      });
    } else {
      this.productService
        .getProductsByCatId(this.receivedCatID)
        .subscribe((data) => {
          this.products = data;
        });
    }
  }

  prdDetails(prdId: number) {
    this.router.navigate(['/product/productdetails/', prdId]);
  }
  // getProductByID(prodId: number): Iproduct | undefined {
  //   return this.products.find((prd) => prd.id == prodId);
  // }
}

// filterByCategory(event:any){
//   let value = event.target.value;
//   if(value =="All"){
//     this.productService.getAllProducts().subscribe(data => {this.products = data;},);
//   }
//   else{
//     this.getProductsCategory(value);
//   }

// }

// getProductsCategory(Key:number){
//   this.productService.getProductsByCatId(Key).subscribe((res:any) =>{
//     this.products = res
//   })
// }

// getProductImages(){
//   this.productService.getAllProductsImages().subscribe(data => {this.productsImage = data;},);
// }
