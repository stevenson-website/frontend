import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
  @Input() link: string = '';

  constructor() {}
}
