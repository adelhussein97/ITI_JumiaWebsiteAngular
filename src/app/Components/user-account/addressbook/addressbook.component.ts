import { Component } from '@angular/core';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent {
  addresses = [
    { name: 'John Doe', address: '123 Main St, Anytown USA', phone: '(555) 123-4567' },
    { name: 'Jane Smith', address: '456 Oak Ave, Somecity USA', phone: '(555) 987-6543' }
  ];

  addAddress() {
    // TODO: Implement logic to add a new address

  }

  editAddress(address:any) {
    // TODO: Implement logic to edit an existing address
  }

  deleteAddress(address:any) {
    // TODO: Implement logic to delete an existing address
  }

}
