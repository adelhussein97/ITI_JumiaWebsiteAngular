import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
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

  receivedCatID: number=0;
  @Input() productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
    this.productService
      .getAllProductsImages(this.productId)
      .subscribe((data) => {
        this.productsImage = data;
      });
  }

  ngOnChanges(): void {

    if (this.receivedCatID == 0) {
      this.productService.getAllProducts().subscribe((data1) => {
        this.products = data1;
        console.log(data1);
      });
    } else {
      this.productService
        .getProductsByCatId(this.receivedCatID)
        .subscribe((data) => {
          this.products = data;
          console.log(data);

        });
    }

  }

  getproductsByCatIdd(catid: number){

  }

  prdDetails(prdId: number) {
    console.log(Number);
    this.router.navigate(['/product/productdetails/', prdId]);
  }

  getProductByID(prodId: number): Iproduct | undefined {
    return this.products.find((prd) => prd.id == prodId);
  }
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
