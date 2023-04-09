import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Model/iproduct';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

 products: Iproduct[] = [];

 constructor(private route: ActivatedRoute, private productService: ProductApiService) { }


  ngOnInit()  {
      this.productService.getAllProducts().subscribe(data => {this.products = data;},
      );
  }

}
