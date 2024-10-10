import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent {
  downScrollDeactivated$: BehaviorSubject<boolean>;
  upScrollDeactivated$: BehaviorSubject<boolean>;

  constructor() {
    this.upScrollDeactivated$ = new BehaviorSubject<boolean>(true);
    this.downScrollDeactivated$ = new BehaviorSubject<boolean>(false);
  }

  scrollToTop() {
    const skills = document.getElementById('skills');
    skills?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollUp() {
    const skills = document.getElementById('skills');
    const education = document.getElementById('education');
    const certs = document.getElementById('certificates');

    if (education?.getBoundingClientRect().top === 0)
      skills?.scrollIntoView({ behavior: 'smooth' });
    else if (certs?.getBoundingClientRect().top === 0)
      education?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollDown() {
    const skills = document.getElementById('skills');
    const education = document.getElementById('education');
    const certs = document.getElementById('certificates');

    if (skills?.getBoundingClientRect().top === 0)
      education?.scrollIntoView({ behavior: 'smooth' });
    else if (education?.getBoundingClientRect().top === 0)
      certs?.scrollIntoView({ behavior: 'smooth' });
  }
}
