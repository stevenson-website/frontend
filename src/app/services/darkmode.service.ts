import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeBehaviorSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  constructor() {}

  getBehaviorSubject(): BehaviorSubject<boolean> {
    return this.darkModeBehaviorSubject;
  }

  toggleDarkMode(): void {
    const currentMode = this.darkModeBehaviorSubject.getValue();
    this.darkModeBehaviorSubject.next(!currentMode);
  }
}
