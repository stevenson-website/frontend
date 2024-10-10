import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'certificate-section',
  templateUrl: './certificate-section.component.html',
  styleUrls: ['./certificate-section.component.css'],
})
export class CertificateSectionComponent {
  @Output() arrowEvent = new EventEmitter<void>();

  constructor() {}

  arrowPressed() {
    this.arrowEvent.emit();
  }
}
