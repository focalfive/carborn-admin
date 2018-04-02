import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule } from '@angular/material';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    PlayComponent,
  ],
})
export class PlayModule { }
