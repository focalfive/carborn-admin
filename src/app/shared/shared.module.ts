import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { GnbComponent } from './gnb/gnb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [GnbComponent],
  declarations: [GnbComponent],
})
export class SharedModule { }
