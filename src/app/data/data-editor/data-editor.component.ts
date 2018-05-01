import { Component, Input, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

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

  dataList: Data[] = [];
  data: Data;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Car>;
  columns: Column[] = [];
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
    this.dataService.get(this.id).subscribe(
      (data: Data) => {
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
      },
      err => {
        console.error('Error', err);
      }
    );
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

}
