import { Component } from '@angular/core';
import { LocaleService } from 'src/app/services/locale.service';

type Language = 'en' | 'de';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  currentLanguage: Language;

  constructor(private localeService: LocaleService) {
    this.currentLanguage = this.localeService.getCurrentLanguage();
  }

  changeLanguage(language: Language): void {
    this.currentLanguage = language;
    this.localeService.setLanguage(language);
  }
}
