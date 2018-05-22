import { Injectable } from '@angular/core';
import {
  MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser,
  TranslateService
} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateLanguageService extends TranslateService {

  constructor(private translate: TranslateService, currentLoader: TranslateLoader, compiler: TranslateCompiler, parser: TranslateParser, missingTranslationHandler: MissingTranslationHandler) {
    super(null, currentLoader, compiler, parser, missingTranslationHandler);
    this.translate.addLangs(['zh-CHS', 'en']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'zh-CHS');
  }
  changeLanguage (lang: string) {
    this.translate.use(lang);
  }
}
