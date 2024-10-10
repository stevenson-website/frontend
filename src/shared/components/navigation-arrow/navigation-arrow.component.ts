import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.css'],
})
export class NavigationArrowComponent {
  @Input() direction: 'up' | 'down' = 'down';
  @Input() color: 'primary' | 'second' | 'third' = 'primary';

  @Output() arrowEvent = new EventEmitter<void>();

  constructor() {}

  arrowPressed() {
    this.arrowEvent.emit();
  }
}
