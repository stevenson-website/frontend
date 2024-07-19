import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  @ViewChild('fadeElementBackground') fadeElementRefProfilePic!: ElementRef;

  constructor() {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const fadeElementBackground = this.fadeElementRefProfilePic
      .nativeElement as HTMLElement;
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const opacity = 1 - scrollPosition / window.innerHeight; // You can adjust this equation based on your requirements

    fadeElementBackground.style.opacity = opacity.toString();
  }
}
