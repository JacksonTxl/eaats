import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false;
  constructor () {}
  completeLogin (event) {
    if (event) {
      this.isLogin = true;
    }
  }
}
