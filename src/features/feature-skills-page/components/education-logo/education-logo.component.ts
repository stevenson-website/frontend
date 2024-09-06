import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'education-logo',
  templateUrl: './education-logo.component.html',
  styleUrls: ['./education-logo.component.css'],
})
export class EducationLogoComponent {
  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
}
