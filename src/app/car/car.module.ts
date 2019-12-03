import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { CarListComponent } from './car-list.component';
import { CarComponent } from './car.component';



@NgModule({
  declarations: [
    CarListComponent,
    CarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ]
})
export class CarModule { }
