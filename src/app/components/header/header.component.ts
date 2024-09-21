import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavigationRoute } from 'src/app/models/navigation-route';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  @Output() drawerEvent = new EventEmitter<void>();
  @Output() darkModeEvent = new EventEmitter<void>();

  @Input() navigationRoutes: NavigationRoute[] = [];

  @Input() hamburgerMenuTilted = false;

  darkMode$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
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
    this.hamburgerMenuTilted = !this.hamburgerMenuTilted;
  }

  darkModeToggled() {
    this.darkModeEvent.emit();
  }
}
