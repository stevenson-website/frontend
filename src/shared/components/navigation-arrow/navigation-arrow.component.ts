import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.css'],
})
export class NavigationArrowComponent {
  @Input() direction: 'up' | 'down' = 'down';
  @Input() color: 'primary' | 'second' | 'third' = 'primary';

  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
}
