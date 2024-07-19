import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'convertDate',
})
export class ConvertDatePipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  public transform(
    value: Date | string,
    pattern: string = 'fullDate'
  ): string | null {
    let localPattern = pattern;

    if (localPattern === 'shortDate') {
      if (this.locale === 'de-DE') {
        localPattern = 'dd.MM.yyyy';
      } else {
        localPattern = 'M/d/yyyy';
      }
    }

    const datePipe = new DatePipe(this.translateService.currentLang);
    return datePipe.transform(value, localPattern);
  }
}
