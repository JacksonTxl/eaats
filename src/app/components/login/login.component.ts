import { Component, OnInit, Output } from '@angular/core';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languageClassFlag = true;

  constructor(
    private translate1: TranslateLanguageService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onChangeLanguage (lang: string) {
    this.translate1.changeLanguage(lang);
    this.languageClassFlag = !this.languageClassFlag;
  }

  onLogin () {
    this.authService.login().then(result => {
      if (result) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
