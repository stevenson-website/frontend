import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent {
  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
}
