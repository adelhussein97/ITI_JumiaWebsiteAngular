import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icategory } from 'src/app/Model/icategory';
import { Iproduct } from 'src/app/Model/iproduct';
import { ProductApiService } from 'src/app/services/product-api.service';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  entryComponents: [
    AllProductsComponent,
  ],
  // get entryComponents() {
  //   return this._entryComponents;
  // },
  // set entryComponents(value) {
  //   this._entryComponents = value;
  // },
})
export class CategoryComponent implements OnInit , OnChanges{
  constructor(private productService: ProductApiService ){}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }

  @Input() receivedCatID:number = 0;
  products: Iproduct[] = [];
  selectedCatID: number = 0;
  categories: Icategory[] = [];
  ngOnChanges(changes: SimpleChanges): void {

    if(this.receivedCatID==0){

      this.productService.getAllProducts().subscribe(data=>{
        this.products=data;
        console.log(this.receivedCatID);

      })
    }
    else{
    this.productService.getProductsByCatId(this.receivedCatID).subscribe(data => {
      this.products = data;
      console.log(this.receivedCatID);

    });
  }
  console.log(this.receivedCatID);

  }



}
