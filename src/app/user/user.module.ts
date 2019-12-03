import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { UserService } from './user.service';
import { UserLoginComponent } from './user-login.component';
import { UserVerifyComponent } from './user-verify.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserVerifyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserLoginComponent,
    UserVerifyComponent,
  ],
})
export class UserModule { }
