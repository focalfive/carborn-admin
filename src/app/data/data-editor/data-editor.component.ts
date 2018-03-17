import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

import { DataService } from '../shared/data.service';
import { Data } from '../shared/data.model';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class DataEditorComponent implements OnChanges, OnInit, AfterViewInit {

  dataList: Data[] = [];
  data: Data;
  displayedColumns = ['brand', 'display_name', 'hp', 'torque', 'weight', 'year'];
  dataSource: MatTableDataSource<Car>;
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
    console.log('chagnes', changes);
    if (this.id) {
      this.loadData();
    }
  }

  ngAfterViewInit() {
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
    console.log('loadData', this.id);
    this.dataService.get(this.id).subscribe(
      (data: Data) => {
        console.log(data);
        this.data = data;
        this.dataSource = new MatTableDataSource<Car>(data.cars);
        this.dataSource.sort = this.sort;
      },
      err => {
        console.error('Error', err);
      }
    );
  }

  listDidSelect(event: any, id: string) {
    // this.dataId = id;
    let queryParams = {
      dataId: id,
    }
    this.router.navigate(['data'], {queryParams: queryParams});
  }

}
