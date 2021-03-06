import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin = false;

  // 菜单是否展示
  menuShow = false;
  constructor (
    private authService: AuthService,
  ) {}

  ngOnInit () {
    this.login();
  }

  login () {
    this.authService.loginSubject.subscribe(result => {
      this.isLogin = result;
    });
  }
}
