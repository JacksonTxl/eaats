import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieUtil } from '../utils/cookie.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
  ) {}

  canActivate(): boolean {
    const session = CookieUtil.getCookie('session');
    if (session) {
      this.authService.loginSubject.next(true);
      return true;
    } else {
      this.authService.loginSubject.next(false);
      return false;
    }
  }
}
