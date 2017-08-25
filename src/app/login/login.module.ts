import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MdButtonModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './shared/login.service';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        LoginRoutingModule,
    ],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
