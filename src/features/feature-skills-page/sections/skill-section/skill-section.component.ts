import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css'],
})
export class SkillSectionComponent {
  @Output() scrollDownEvent = new EventEmitter<void>();
  constructor() {}

  scrollDown() {
    this.scrollDownEvent.emit();
  }
}
