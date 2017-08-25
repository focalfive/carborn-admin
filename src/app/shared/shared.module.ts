import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { GnbComponent } from './gnb/gnb.component';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        RouterModule,
    ],
    exports: [
        GnbComponent
    ],
    declarations: [
        GnbComponent,
    ],
})
export class SharedModule { }
