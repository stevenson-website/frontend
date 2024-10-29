import { Component } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent {
  projects: Project[] = [
    {
      title: 'feature-projects.memory.title',
      description: 'feature-projects.memory.description',
      imagePath: '/assets/pictures/other/poke_game.png',
      link: 'https://elaborate-heliotrope-c71613.netlify.app/',
    },
    {
      title: 'feature-projects.further.title',
      description: 'feature-projects.further.description',
      imagePath: '/assets/pictures/other/construction.svg',
      link: '',
    },
  ];

  constructor() {}
}
