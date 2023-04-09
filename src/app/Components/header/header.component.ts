import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(public _authServices: AuthServicesService)
   {
    this._authServices.cartSubject.subscribe((data)=>{
      this.cartItem=data
    });
   }
  ngOnInit(): void {
    this.cartItemFunc();
  }
  cartItem:number=0;
  
  cartItemFunc(){
if(localStorage.getItem('localCart')  !=null){
  var cartCount =JSON.parse(localStorage.getItem('localCart')!);
  this.cartItem=cartCount.length;
}
  }

}
