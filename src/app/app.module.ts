import {
  APP_INITIALIZER,
  ErrorHandler,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

import { GlobalErrorHandler } from './global-error-handler';
import { LocaleService } from './services/locale.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from 'src/features/feature-main-page/main-page/main-page.component';
import { CubeComponent } from 'src/features/feature-main-page/components/cube/cube.component';
import { DarkModeService } from './services/darkmode.service';
import { SkillsPageComponent } from 'src/features/feature-skills-page/skills-page/skills-page.component';
import { SkillCardComponent } from 'src/features/feature-skills-page/components/skill-card/skill-card.component';
import { CertificationBadgeComponent } from 'src/features/feature-skills-page/components/certification-badge/certification-badge.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CertificateSectionComponent } from 'src/features/feature-skills-page/sections/certificate-section/certificate-section.component';
import { EducationSectionComponent } from 'src/features/feature-skills-page/sections/education-section/education-section.component';
import { SkillSectionComponent } from 'src/features/feature-skills-page/sections/skill-section/skill-section.component';
import { NavigationArrowComponent } from 'src/shared/components/navigation-arrow/navigation-arrow.component';

registerLocaleData(localeDE);

function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UnderConstructionComponent,
    HeaderComponent,
    FooterComponent,
    DrawerComponent,

    // Components for Main Page
    MainPageComponent,
    CubeComponent,

    // Components for Skills Page
    SkillsPageComponent,
    CertificateSectionComponent,
    EducationSectionComponent,
    SkillSectionComponent,
    SkillCardComponent,
    CertificationBadgeComponent,

    // Shared Components
    NavigationArrowComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale(),
    },
    {
      provide: APP_INITIALIZER,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => () =>
        localeService.setLanguage(),
      multi: true,
    },
    DarkModeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
