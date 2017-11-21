import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DataEditorComponent } from './data-editor/data-editor.component';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
  declarations: [DataComponent, DataEditorComponent]
})
export class DataModule { }
