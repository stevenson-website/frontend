import { Component } from '@angular/core';
import { Project } from '../model/project';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent {
  darkMode$: BehaviorSubject<boolean>;

  projects: Project[] = [
    {
      title: 'feature-projects.memory.title',
      description: 'feature-projects.memory.description',
      imagePath: 'assets/pictures/other/poke_game.png',
      link: 'https://memory.smandl.com/',
    },
    {
      title: 'feature-projects.further.title',
      description: 'feature-projects.further.description',
      imagePath: 'assets/pictures/other/construction.svg',
      link: '',
    },
  ];

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }
}
