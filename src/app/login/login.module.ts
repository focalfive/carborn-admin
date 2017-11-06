import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './shared/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule { }
