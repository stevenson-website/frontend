import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent {
  @Input() title: string = '';
  @Input() titleIcon: string = '';
  @Input() skillList: string[] = [];

  constructor() {}
}
