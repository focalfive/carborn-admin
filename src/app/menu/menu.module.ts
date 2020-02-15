import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
  // exports: [
  //   MenuComponent,
  // ],
})
export class MenuModule { }
