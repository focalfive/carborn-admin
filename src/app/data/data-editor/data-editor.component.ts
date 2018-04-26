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
  displayedColumns = [];
  dataSource: MatTableDataSource<Car>;
  columns = [];
  // [
  //   { key: 'brand', name: 'Brand', selected: false },
  //   { key: 'carcode', name: 'Car code', selected: true },
  //   { key: 'cylinder_arrangement', name: 'Cylinder arrangement', selected: false },
  //   { key: 'cylinders', name: 'Cylinder count', selected: false },
  //   { key: 'discontinue', name: 'Discontinue', selected: false },
  //   { key: 'displacement', name: 'Displacement', selected: false },
  //   { key: 'display_name', name: 'Display name', selected: false },
  //   { key: 'efficiency', name: 'Efficiency', selected: false },
  //   { key: 'efficiency_sport', name: 'Efficiency for Sports mode', selected: false },
  //   { key: 'engine_layout', name: 'Engine layout', selected: false },
  //   { key: 'engine_position', name: 'Engine position', selected: false },
  //   { key: 'gearbox_level', name: 'Gearbox max level', selected: false },
  //   { key: 'gearbox_type', name: 'Gearbox type', selected: false },
  //   { key: 'generation_name', name: 'Generation name', selected: false },
  //   { key: 'generation_sequence', name: 'Generation sequence', selected: false },
  //   { key: 'hp', name: 'HP', selected: false },
  //   { key: 'hp_at_rpm', name: 'Max HP at RPM', selected: false },
  //   { key: 'image_url', name: 'Image URL', selected: false },
  //   { key: 'manufacturer', name: 'Manufacturer', selected: false },
  //   { key: 'max_rpm', name: 'Max RPM', selected: false },
  //   { key: 'model', name: 'Model', selected: false },
  //   { key: 'price_eu', name: 'Price (EU)', selected: false },
  //   { key: 'price_kr', name: 'Price (KR)', selected: false },
  //   { key: 'rejection_co2', name: 'Rejection (CO2)', selected: false },
  //   { key: 'torque', name: 'Torque', selected: false },
  //   { key: 'torque_from', name: 'Max Torque from RPM', selected: false },
  //   { key: 'torque_to', name: 'Max Torque to RPM', selected: false },
  //   { key: 'weight', name: 'Weight', selected: false },
  //   { key: 'year', name: 'Year', selected: false },
  // ];
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
  ) {
    // TODO: Init column array from Car.columns
  }

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
    console.log('ngAfterViewInit');
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
        const keys = this.dataService.getAllKeys(data.cars);
        this.columns = keys.map(key => ({ key: key, name: key, selected: false }));
        if (!this.dataService.hasStoredColumns) {
          console.log('keys', keys);
          this.displayedColumns = keys;
        }
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
    console.log('columnMenuDidSelect', id);
  }

}
