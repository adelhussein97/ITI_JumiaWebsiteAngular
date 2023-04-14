import { Component, OnInit } from '@angular/core';
import { Icart } from 'src/app/Model/icart';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  carts: Icart[] = [];
  userId: any = '';
  constructor(private cartsApi: CartApiService) {}
  ngOnInit(): void {
    this.userId = localStorage.getItem('UserId')?.toString();

    this.cartsApi.GetCartsByUserId(this.userId).subscribe((data) => {
      this.carts = data;
    });
  }
  // orders = [
  //   { id: '123', date: '2022-04-10', total: 100.00, status: 'Shipped' },
  //   { id: '456', date: '2022-04-09', total: 50.00, status: 'Delivered' },
  //   { id: '789', date: '2022-04-08', total: 75.00, status: 'Pending' }
  // ];

  viewOrderDetails(order: any) {
    // TODO: Implement logic to view the details of an order
  }

  editOrder(order: any) {
    // TODO: Implement logic to edit an order
  }
}
