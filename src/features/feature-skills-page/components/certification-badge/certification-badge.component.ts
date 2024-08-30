import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'certification-badge',
  templateUrl: './certification-badge.component.html',
  styleUrls: ['./certification-badge.component.css'],
})
export class CertificationBadgeComponent {
  @Input() logo: string = '';
  @Input() title: string = '';

  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }

  onHover(): void {
    document.getElementById('title-' + this.logo)?.classList.remove('hidden');
    document
      .getElementById('logo-' + this.logo)
      ?.classList.remove('opacity-100');
    document.getElementById('logo-' + this.logo)?.classList.add('opacity-30');
  }

  onUnhover(): void {
    document.getElementById('title-' + this.logo)?.classList.add('hidden');
    document
      .getElementById('logo-' + this.logo)
      ?.classList.remove('opacity-30');
    document.getElementById('logo-' + this.logo)?.classList.add('opacity-100');
  }
}
