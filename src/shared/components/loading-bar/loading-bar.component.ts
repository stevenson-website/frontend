import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent{
  @Input()
  center = false;
}
