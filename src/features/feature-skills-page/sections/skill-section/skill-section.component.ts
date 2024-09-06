import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css'],
})
export class SkillSectionComponent implements AfterViewInit {
  @Output() scrollDownEvent = new EventEmitter<void>();
  constructor() {}

  ngAfterViewInit(): void {
    const skills = Array.from(document.querySelectorAll('.skill'));

    const beginStates = [
      { opacity: 0, x: -30, y: -30 },
      { opacity: 0, x: 30, y: -30 },
      { opacity: 0, x: -30, y: 30 },
      { opacity: 0, x: 30, y: 30 },
    ];

    const finalStates = [
      { opacity: 1, x: 0, y: 0, scale: 1 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
    ];

    skills.forEach((skill, index) => {
      gsap.fromTo(skill, beginStates[index], {
        ...finalStates[index],
        duration: 1,
      });
    });
  }

  scrollDown() {
    this.scrollDownEvent.emit();
  }
}
