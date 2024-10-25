import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css'],
})
export class DynamicTitleComponent implements OnInit {
  texts: string[] = [
    "Hi, I'm Stephan",
    'Software Engineer',
    'Privacy Professional',
    'Retired Lawyer',
  ];
  deleting: boolean = false;
  displayedText: string = '';

  typingSpeed = 200; // typing speed in milliseconds
  deletingSpeed = 100; // typing speed in milliseconds

  currentArrayIndex: number = 0;
  currentStringIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.currentStringIndex < this.texts[this.currentArrayIndex].length) {
      this.displayedText +=
        this.texts[this.currentArrayIndex][this.currentStringIndex];
      this.currentStringIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    } else {
      setTimeout(() => {
        this.deleteText();
      }, 2000);
    }
  }

  deleteText() {
    if (this.currentStringIndex > 0) {
      this.displayedText = this.displayedText.slice(0, -1);
      this.currentStringIndex--;
      setTimeout(() => this.deleteText(), this.deletingSpeed);
    } else {
      this.currentArrayIndex = (this.currentArrayIndex + 1) % this.texts.length;
      this.typeText();
    }
  }
}
