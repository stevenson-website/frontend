import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from './models/navigation-route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stevenson-website-angular';
  darkMode = false;

  navigationRoutes: NavigationRoute[] = [];

  constructor(private router: Router) {
    this.registerNavigationRoutes();
  }

  registerNavigationRoutes() {
    this.navigationRoutes.push(
      {
        path: 'offers',
        translationName: 'app.navigation.feature-offers',
      },
      {
        path: 'about-me',
        translationName: 'app.navigation.feature-about-me',
      }
    );
  }

  changeDarkMode() {
    this.darkMode = !this.darkMode;
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
