import { Component, OnInit, Output } from '@angular/core';
import { TranslateLanguageService } from '../../services/translate-language.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../directive/validator.directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languageClassFlag = true;

  loginForm: FormGroup;

  username = 'admin';
  password = '';

  constructor(
    private translate1: TranslateLanguageService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(this.username, [
        Validators.required,
        forbiddenNameValidator(/zhangfei/ig)
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ])
    });
  }

  get name () {
    return this.loginForm.get('name');
  }
  get pwd () {
    return this.loginForm.get('password');
  }

  onChangeLanguage (lang: string) {
    this.translate1.changeLanguage(lang);
    this.languageClassFlag = !this.languageClassFlag;
  }

  onLogin () {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.getRawValue());

    if (!this.loginForm.valid) {
      // this.loginForm.patchValue();
    }
    this.authService.login().then(result => {
      if (result) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
