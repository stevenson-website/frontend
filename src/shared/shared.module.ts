import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ConvertDatePipe } from './pipes/convert-date.pipe';

@NgModule({
  imports: [CommonModule, MatProgressBarModule, RouterModule],
  declarations: [ConvertDatePipe],
  providers: [],
  exports: [ConvertDatePipe],
})
export class SharedModule {}
