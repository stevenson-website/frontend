import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule,
  ],
  declarations: [
    ConvertDatePipe,
    LoadingBarComponent
  ],
  providers: [],
  exports: [
    ConvertDatePipe,
    LoadingBarComponent,
  ],
})
export class SharedModule {}
