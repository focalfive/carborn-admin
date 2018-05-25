import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Car } from '../shared/car.model';

@Component({
  selector: 'app-data-row-editor',
  templateUrl: 'data-row-editor-dialog.component.html',
  styleUrls: ['data-row-editor-dialog.component.css']
})
export class DataRowEditorDialogComponent {

  keys: string[];

  constructor(
    public dialogRef: MatDialogRef<DataRowEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car) {
      this.keys = Object.keys(data);
      console.log(this.keys);
    }

}
