import { Component, Input, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';

import { DataRowEditorDialogComponent } from './data-row-editor-dialog.component';
import { DataService } from '../shared/data.service';
import { Car } from '../shared/car.model';
import { Column } from '../shared/column.model';
import { Data } from '../shared/data.model';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class DataEditorComponent implements OnChanges, OnInit {

  isLoading = true;
  dataList: Data[] = [];
  data: Data;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Car>;
  columns: Column[] = [];
  selectedIndex: number;
  @Input() id: string = null;
  get dataId(): string {
    return this.id;
  }
  set dataId(newValue: string) {
    if (this.id !== newValue) {
      this.id = newValue;
      if (!!newValue) {
        this.loadData();
      }
    }
  }

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (this.id) {
      this.loadData();
    }
  }

  loadList() {
    this.dataService.getList().subscribe(
      (list: Data[]) => {
        this.isLoading = false;
        this.dataList = [];
        list.map(model => {
          if (model.title) {
            this.dataList.push(model);
          }
        });
      },
      err => {
        console.error('Error', err);
      }
    )
  }

  loadData() {
    this.isLoading = true;
    this.dataService.get(this.id).subscribe(
      (data: Data) => {
        this.isLoading = false;
        this.parseData(data);
      },
      err => {
        this.isLoading = false;
        console.error('Error', err);
      }
    );
  }

  updateData(index: number, car: Car) {
    this.isLoading = true;
    const cars = this.data.cars;
    cars[index] = car;
    this.dataService.setCars(this.id, cars).subscribe(
      (data: Data) => {
        this.isLoading = false;
        this.parseData(data);
      },
      err => {
        this.isLoading = false;
        console.error('Error', err);
      }
    );
  }

  parseData(data: Data) {
    this.data = data;
    const keys = this.dataService.getAllKeys(data.cars);
    this.columns = this.dataService.getStoredColumns(this.id);
    if (!Array.isArray(this.columns) || this.columns.length === 0) {
      this.columns = keys.map((key, index) => {
        return { key: key, name: key, selected: index < 5 };
      });
      this.dataService.setStoredColumns(this.id, this.columns);
    }
    this.displayedColumns = this.dataService.getDispayColumnKeys(this.columns);
    this.dataSource = new MatTableDataSource<Car>(data.cars);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
    }, 0);
  }

  versionMenuDidSelect(event: any, id: string) {
    // this.dataId = id;
    let queryParams = {
      dataId: id,
    }
    this.router.navigate(['data'], {queryParams: queryParams});
  }

  columnMenuDidSelect(event: any, id: string) {
    if (!Array.isArray(this.columns)) {
      return;
    }
    const count = this.columns.length;
    if (count === 0) {
      return;
    }
    let hasChanges = false;
    this.columns.map((column, index) => {
      if (column.key === id) {
        this.columns[index].selected = !this.columns[index].selected;
        hasChanges = true;
      }
    });
    if (hasChanges) {
      this.displayedColumns = this.dataService.getDispayColumnKeys(this.columns);
      this.dataService.setStoredColumns(this.id, this.columns);
    }
    event.stopPropagation();
  }

  rowDidClick(index) {
    this.selectedIndex = this.selectedIndex === index ? undefined : index;
  }

  rowDidDoubleClick(index) {
    this.selectedIndex = this.selectedIndex === index ? undefined : index;
    const car = Object.assign({}, this.data.cars[index]);
    let dialogRef = this.dialog.open(DataRowEditorDialogComponent, {
      width: '80%',
      maxHeight: '80%',
      data: car,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result, typeof result);
      if (typeof result !== 'object' || result === null) {
        return;
      }
      this.updateData(this.selectedIndex, result);
    });
  }

}
