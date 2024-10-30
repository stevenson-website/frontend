import { AfterViewInit, Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css'],
})
export class SkillSectionComponent implements AfterViewInit {
  isMobile: boolean;

  cards: {
    title: string;
    icon: string;
    skillList: string[];
  }[] = [
    {
      title: 'feature-skills.skill-section.infra.title',
      icon: 'settings_suggest',
      skillList: [
        'feature-skills.skill-section.infra.gcp',
        'feature-skills.skill-section.infra.terraform',
        'feature-skills.skill-section.infra.gh',
        'feature-skills.skill-section.infra.ci-cd',
      ],
    },
    {
      title: 'feature-skills.skill-section.frontend.title',
      icon: 'devices',
      skillList: [
        'feature-skills.skill-section.frontend.angular',
        'feature-skills.skill-section.frontend.html',
        'feature-skills.skill-section.frontend.tailwind',
      ],
    },
    {
      title: 'feature-skills.skill-section.backend.title',
      icon: 'code',
      skillList: [
        'feature-skills.skill-section.backend.js-ts',
        'feature-skills.skill-section.backend.java',
        'feature-skills.skill-section.backend.node',
        'feature-skills.skill-section.backend.spring',
      ],
    },
    {
      title: 'feature-skills.skill-section.legal.title',
      icon: 'gavel',
      skillList: [
        'feature-skills.skill-section.legal.privacy',
        'feature-skills.skill-section.legal.it',
        'feature-skills.skill-section.legal.tele',
      ],
    },
  ];

  constructor() {
    this.isMobile = false;
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }

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
}
