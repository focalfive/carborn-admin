import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule,
  MatProgressSpinnerModule, MatTableModule, MatSortModule
} from '@angular/material';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DataEditorComponent } from './data-editor/data-editor.component';
// import { DataRowEditorDialogComponent } from './data-editor/data-row-editor-dialog.component';
import { DataService } from './shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    // MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    DataComponent,
    DataEditorComponent,
    // DataRowEditorDialogComponent,
  ],
  // entryComponents: [DataRowEditorDialogComponent],
  providers: [DataService],
})
export class DataModule { }
