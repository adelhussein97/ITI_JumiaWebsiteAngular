import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public _authServices: AuthServicesService,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.onLangchange();
  }
  onLangchange() {
    this.translate.onLangChange.subscribe((res) => {
      console.log(`${res}`);
    });
  }
  changeLang(event: any) {
    this.translate.setDefaultLang(event.target.value);
  }
}
