import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { AddressbookComponent } from './addressbook/addressbook.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile/userprofile', pathMatch: 'full' },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    title: 'userprofile',
  },
  {
    path: 'editprofile',
    component: EditprofileComponent,
    title: 'editprofile',
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
    title: 'changepassword',
  },
  { path: 'MyOrders', component: OrdersComponent, title: 'AllOrders' },
  { path: 'payment', component: PaymentmethodsComponent, title: 'payment' },
  {
    path: 'addressbook',
    component: AddressbookComponent,
    title: 'addressbook',
  },
];

@NgModule({
  declarations: [
    UserProfileComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    OrdersComponent,
    PaymentmethodsComponent,
    AddressbookComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class UserAccountModule {}
