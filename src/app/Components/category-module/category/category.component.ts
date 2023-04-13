import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnChanges{
  constructor(private productService: ProductApiService){}

  @Input() receivedCatID:number = 0;
  products: Iproduct[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    debugger
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
