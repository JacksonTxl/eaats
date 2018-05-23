import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CookieUtil } from '../utils/cookie.util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginFlag = false;
  loginSubject: Subject<boolean> = new Subject();

  constructor(private router: Router) { }

  async isLogin(): Promise<boolean> {
    let login = false;
    await setTimeout(() => {
      CookieUtil.setCookie('session', '1', 24 * 60 * 60 * 1000);
      login = true;
      this.loginSubject.next(true);
    }, 1000);
    return login;
  }


  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(1);
      setTimeout(() => {
        CookieUtil.setCookie('session', '1', 24 * 60 * 60 * 1000);
        this.isLoginFlag = true;
        console.log(2);
        this.loginSubject.next(true);
        resolve(true);
      }, 1000);
      console.log(3);
    });
  }
}
