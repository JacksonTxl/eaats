import { TestBed, inject } from '@angular/core/testing';

import { TranslateLanguageService } from './translate-language.service';

describe('TranslateLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateLanguageService]
    });
  });

  it('should be created', inject([TranslateLanguageService], (service: TranslateLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
