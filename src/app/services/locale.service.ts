import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Locale = 'en-US' | 'de-DE';
type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  defaultLanguage: Language = 'de';
  languages: Language[] = ['en', 'de'];

  defaultLocale: Locale = 'de-DE';
  locales: Locale[] = ['en-US', 'de-DE'];

  languageToLocale: Record<Language, Locale> = {
    en: 'en-US',
    de: 'de-DE',
  };

  constructor(private translateService: TranslateService) {}

  getLocale(): string {
    return this.languageToLocale[this.getBrowserLanguageWithFallback()];
  }

  setLanguage(language?: Language): void {
    const selectedLanguage = language ?? this.getBrowserLanguageWithFallback();

    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(selectedLanguage);
  }

  getCurrentLanguage(): Language {
    const currentLanguage =
      this.translateService.currentLang || this.translateService.defaultLang;

    if (
      currentLanguage &&
      this.languages.includes(currentLanguage as Language)
    ) {
      return currentLanguage as Language;
    }

    return this.defaultLanguage;
  }

  private getBrowserLanguageWithFallback(): Language {
    const browserLang = this.translateService.getBrowserLang();

    if (!browserLang || !this.languages.includes(browserLang as Language)) {
      return this.defaultLanguage;
    }

    return browserLang as Language;
  }
}
