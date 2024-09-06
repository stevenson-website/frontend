import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  @Output() scrollUpEvent = new EventEmitter<void>();
  @Output() scrollDownEvent = new EventEmitter<void>();

  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }

  scrollUp() {
    this.scrollUpEvent.emit();
  }
  scrollDown() {
    this.scrollDownEvent.emit();
  }
}
