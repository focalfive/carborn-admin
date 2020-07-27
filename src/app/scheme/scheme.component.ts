import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';

import { SchemeService } from './scheme.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface SchemeData {
  name: string
  type: string
  names: string[]
}

export const SCHEME_OPTIONS = ['string', 'number']


@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {
  
  model?: any
  formItems: any[] = []
  options = SCHEME_OPTIONS
  isLoading = false

  constructor(
    public dialog: MatDialog,
    private schemeService: SchemeService,
  ) { }

  ngOnInit() {
    this.schemeService.getCarScheme().subscribe(model => {
      this.model = model
      console.log('scheme model', model)

      this.formItems = Object.keys(model)
        .filter(key => key !== 'key')
        .map(key => ({ title: key, value: model[key] }))
    })
  }

  addNewField() {
    const dialogRef = this.dialog.open(SchemeAddDialogComponent, {
      width: '250px',
      data: { name: null, type: null, names: Object.keys(this.model) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result)
      if (!!result && !!result.name && !!result.type) {
        this.schemeService.addCarScheme(result.name, result.type)
      }
    });
  }

  deleteField() {
    const dialogRef = this.dialog.open(SchemeDeleteDialogComponent, {
      width: '250px',
      data: { name: null, names: Object.keys(this.model) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result)
      if (!!result && !!result.name) {
        this.schemeService.deleteCarScheme(result.name)
      }
    });
  }

  saveDidSelect() {
    if (!this.formItems.reduce((isChanged, item) => isChanged || this.model[item.title] !== item.value, false)) {
      console.log('no changes')
      return
    }

    this.schemeService.updateCarScheme(this.formItems)
  }

}


@Component({
  selector: 'app-scheme-add-dialog',
  templateUrl: './scheme-add-dialog.component.html',
  styleUrls: ['./scheme-add-dialog.component.scss']
})
export class SchemeAddDialogComponent {

  options = SCHEME_OPTIONS
  typeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  nameInputTextFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher()
  get hasSameName(): boolean {
    return this.data.names.indexOf(this.data.name) >= 0
  }

  constructor(
    public dialogRef: MatDialogRef<SchemeAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchemeData,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close()
  }

  onOkClick(): void {
    if (!this.data.name || this.hasSameName) {
      return
    }
    if (!this.data.type) {
      return
    }
    this.dialogRef.close(this.data)
  }

}


@Component({
  selector: 'app-scheme-delete-dialog',
  templateUrl: './scheme-delete-dialog.component.html',
  styleUrls: ['./scheme-delete-dialog.component.scss']
})
export class SchemeDeleteDialogComponent {

  nameInputTextFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher()
  get hasSameName(): boolean {
    return this.data.names.indexOf(this.data.name) >= 0
  }

  constructor(
    public dialogRef: MatDialogRef<SchemeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchemeData,
  ) { }

  onCancelClick(): void {
    this.dialogRef.close()
  }

  onOkClick(): void {
    if (!this.data.name || !this.hasSameName) {
      return
    }
    this.dialogRef.close(this.data)
  }

}
