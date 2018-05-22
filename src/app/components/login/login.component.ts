import { Component, OnInit, Output } from '@angular/core';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languageClassFlag = true;

  @Output()
  login = new Subject();
  constructor(private translate1: TranslateLanguageService, private router: Router) { }

  ngOnInit() {
  }
  onChangeLanguage (lang: string) {
    this.translate1.changeLanguage(lang);
    this.languageClassFlag = !this.languageClassFlag;
  }
  onLogin () {
    this.login.next(true);
    this.router.navigate(['/test']);
  }
}
