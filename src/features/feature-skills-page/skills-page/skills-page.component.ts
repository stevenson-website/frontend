import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent {
  constructor() {}

  scrollToCertificates() {
    const certs = document.getElementById('certificates');
    if (!certs) return;
    certs.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToEducation() {
    const education = document.getElementById('education');
    if (!education) return;
    education.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSkills() {
    const skills = document.getElementById('skills');
    if (!skills) return;
    skills.scrollIntoView({ behavior: 'smooth' });
  }
}
