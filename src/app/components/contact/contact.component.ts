import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  email = 'john.doe@email.com';

  emailIsTriggered: boolean = false;
  emailIsVisible: boolean = false;
  emailIsCopied: boolean = false;

  darkMode$: BehaviorSubject<boolean>;

  constructor(
    private darkModeService: DarkModeService,
    private clipboard: Clipboard
  ) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }

  makeEmailVisible() {
    this.emailIsTriggered = !this.emailIsTriggered;
    setTimeout(() => {
      this.emailIsVisible = true;
    }, 10);
  }

  makeEmailInvisible() {
    this.emailIsTriggered = !this.emailIsTriggered;
    setTimeout(() => {
      this.emailIsVisible = false;
    }, 10);
    this.emailIsCopied = false;
  }

  copyEmail() {
    this.clipboard.copy(this.email);
    this.emailIsCopied = true;
  }
}
