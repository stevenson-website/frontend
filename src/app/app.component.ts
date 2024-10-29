import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from './models/navigation-route';
import { DarkModeService } from './services/darkmode.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stevenson-website-angular';

  navigationRoutes: NavigationRoute[] = [];
  darkMode$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {
    this.registerNavigationRoutes();
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }

  registerNavigationRoutes() {
    this.navigationRoutes.push(
      {
        path: 'skills',
        translationName: 'app.navigation.feature-skills',
      },
      {
        path: 'projects',
        translationName: 'app.navigation.feature-projects',
      }
    );
  }

  changeDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
