import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { GnbComponent } from './gnb/gnb.component';
import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [GnbComponent],
  providers: [UserService],
  declarations: [GnbComponent],
})
export class SharedModule {

  static injector: Injector;
  constructor(injector: Injector) {
    SharedModule.injector = injector;
  }
}