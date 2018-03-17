import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatProgressSpinnerModule,
  MatTableModule, MatSortModule } from '@angular/material';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DataEditorComponent } from './data-editor/data-editor.component';
import { DataService } from './shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [DataComponent, DataEditorComponent],
  providers: [DataService],
})
export class DataModule { }
