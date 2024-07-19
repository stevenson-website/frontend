import { TestBed } from '@angular/core/testing';
import { LocaleService } from './locale.service';
import { MockService } from 'ng-mocks';
import { TranslateService } from '@ngx-translate/core';

describe('LocaleService', () => {
  let service: LocaleService;

  const translateServiceMock = MockService(TranslateService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useFactory: () => translateServiceMock,
        },
      ],
    });
    service = TestBed.inject(LocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLocale', () => {
    const testCases = [
      { browserLanguage: 'de', expectedLocale: 'de-DE' },
      { browserLanguage: 'en', expectedLocale: 'en-US' },
      { browserLanguage: 'fr', expectedLocale: 'en-US' },
    ];

    it.each(testCases)(
      'should return $expectedLocale if browser lang is $browserLang',
      (testCase) => {
        jest
          .spyOn(translateServiceMock, 'getBrowserLang')
          .mockReturnValue(testCase.browserLanguage);
        expect(service.getLocale()).toEqual(testCase.expectedLocale);
      }
    );
  });

  describe('setLanguage', () => {
    const testCases = [
      { browserLanguage: 'de', expectedLanguage: 'de' },
      { browserLanguage: 'en', expectedLanguage: 'en' },
      { browserLanguage: 'fr', expectedLanguage: 'en' },
    ];

    it.each(testCases)(
      'should use $expectedLanguage if browser lang is $browserLang',
      (testCase) => {
        jest
          .spyOn(translateServiceMock, 'getBrowserLang')
          .mockReturnValue(testCase.browserLanguage);
        jest.spyOn(translateServiceMock, 'setDefaultLang');
        jest.spyOn(translateServiceMock, 'use');

        service.setLanguage();

        expect(translateServiceMock.setDefaultLang).toHaveBeenCalledWith('en');
        expect(translateServiceMock.use).toHaveBeenCalledWith(
          testCase.expectedLanguage
        );
      }
    );
  });
});
