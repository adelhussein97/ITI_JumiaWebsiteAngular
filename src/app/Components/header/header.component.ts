import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit{
  constructor(public _authServices: AuthServicesService,
   private translate: TranslateService
  )
   {
    this._authServices.cartSubject.subscribe((data)=>{
      this.cartItem=data
    });
   }
  ngOnInit(): void {
    this.cartItemFunc();
    this.onLangchange();
  }
  onLangchange() {
    this.translate.onLangChange.subscribe((res) => {
      console.log(`${res}`);
    });
  cartItem:number=0;
  changeLang(event: any) {
    this.translate.setDefaultLang(event.target.value);
  cartItemFunc(){
if(localStorage.getItem('localCart')  !=null){
  var cartCount =JSON.parse(localStorage.getItem('localCart')!);
  this.cartItem=cartCount.length;
}
  }


}
