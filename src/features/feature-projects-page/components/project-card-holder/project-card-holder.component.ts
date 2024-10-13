import { Component, Input } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'project-card-holder',
  templateUrl: './project-card-holder.component.html',
  styleUrls: ['./project-card-holder.component.css'],
})
export class ProjectCardHolderComponent {
  @Input() projects: Project[] = [];

  constructor() {}
}
