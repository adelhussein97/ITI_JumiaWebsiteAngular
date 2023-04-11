import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders = [
    { id: '123', date: '2022-04-10', total: 100.00, status: 'Shipped' },
    { id: '456', date: '2022-04-09', total: 50.00, status: 'Delivered' },
    { id: '789', date: '2022-04-08', total: 75.00, status: 'Pending' }
  ];

  viewOrderDetails(order:any) {
    // TODO: Implement logic to view the details of an order
  }

  editOrder(order:any) {
    // TODO: Implement logic to edit an order
  }

}
