import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from 'src/app/models/navigation-route';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  @Output() drawerEvent = new EventEmitter<void>();
  @Output() darkModeEvent = new EventEmitter<void>();

  @Input() navigationRoutes: NavigationRoute[] = [];

  constructor(private router: Router) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

  drawerToggled() {
    this.drawerEvent.emit();
  }

  darkModeToggled() {
    this.darkModeEvent.emit();
  }
}
