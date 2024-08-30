import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'certificate-section',
  templateUrl: './certificate-section.component.html',
  styleUrls: ['./certificate-section.component.css'],
})
export class CertificateSectionComponent {
  @Output() scrollUpEvent = new EventEmitter<void>();
  @Output() scrollDownEvent = new EventEmitter<void>();

  constructor() {}

  scrollUp() {
    this.scrollUpEvent.emit();
  }

  scrollDown() {
    this.scrollDownEvent.emit();
  }
}
