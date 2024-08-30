import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from 'src/app/models/navigation-route';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  @Input() navigationRoutes: NavigationRoute[] = [];

  @Output() drawerEvent = new EventEmitter<void>();

  constructor(private router: Router) {}

  drawerToggled() {
    this.drawerEvent.emit();
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
