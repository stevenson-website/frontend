import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css'],
})
export class EducationCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() text: string = '';

  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
}
