import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { DataService } from '../shared/data.service';
import { Car } from '../shared/car.model';
import { Column } from '../shared/column.model';
import { Data } from '../shared/data.model';
import { WindowService } from '../../shared/window.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class DataEditorComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  @ViewChild('dataTable') private tableElement: ElementRef;

  private dataSubscription = new Subscription();
  private dataListSubscription = new Subscription();
  private windowHeightSubscription = new Subscription();
  isLoading = true;
  dataList: Data[] = [];
  data: Data;
  cars: Car[];
  displayedColumns: string[] = [];
  columns: Column[] = [];
  sortTargetColumn = -1;
  isSortAscending = true;
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

  constructor(
    private dataService: DataService,
    private router: Router,
    private windowService: WindowService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (this.id) {
      this.loadData();
    }
  }

  ngAfterViewInit() {
    console.log(this.tableElement);
    this.windowHeightSubscription.add(
      this.windowService.height
        .debounceTime(500)
        .subscribe(
          height => {
            console.log(height);
            this.resizeTableBody();
          }
        )
    );
  }

  loadList() {
    this.dataListSubscription.add(
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
    );
  }

  loadData() {
    this.isLoading = true;
    this.dataSubscription.add(
      this.dataService.get(this.id).subscribe(
        (data: Data) => {
          this.isLoading = false;
          this.parseData(data);
        },
        err => {
          this.isLoading = false;
          console.error('Error', err);
        }
      )
    );
  }

  // updateData(index: number, car: Car) {
  //   this.isLoading = true;
  //   const cars = this.data.cars;
  //   cars[index] = car;
  //   this.dataService.setCars(this.id, cars).subscribe(
  //     (data: Data) => {
  //       this.isLoading = false;
  //       this.parseData(data);
  //     },
  //     err => {
  //       this.isLoading = false;
  //       console.error('Error', err);
  //     }
  //   );
  // }

  parseData(data: Data) {
    this.data = data;
    this.cars = data.cars.map((car, i) => {
      car.index = i;
      return car;
    });
    const keys = this.dataService.getAllKeys(data.cars);
    this.columns = this.dataService.getStoredColumns(this.id);
    if (!Array.isArray(this.columns) || this.columns.length === 0) {
      this.columns = keys.map((key, index) => {
        return { key: key, name: key, selected: index < 5 };
      });
      this.dataService.setStoredColumns(this.id, this.columns);
    }
    this.displayedColumns = this.dataService.getDispayColumnKeys(this.columns);
    setTimeout(this.resizeTable.bind(this), 0);
  }

  resizeTable() {
    this.resizeTableHeader();
    this.resizeTableBody();
  }

  resizeTableHeader() {
    if (typeof this.tableElement === 'undefined' || this.tableElement === null) {
      return;
    }
    const head = this.tableElement.nativeElement.querySelector('thead');
    const headerColumns = head.querySelectorAll('th');
    const body = this.tableElement.nativeElement.querySelector('tbody');
    const bodyFirstRow = body.querySelector('tr');
    const bodyFirstColumns = bodyFirstRow.querySelectorAll('td');
    const count = Math.min(headerColumns.length, bodyFirstColumns.length);
    for (let i = 0; i < count; ++i) {
      headerColumns[i].style.width = bodyFirstColumns[i].scrollWidth + 'px';
    }
  }

  resizeTableBody() {
    if (typeof this.tableElement === 'undefined' || this.tableElement === null) {
      return;
    }
    const head = this.tableElement.nativeElement.querySelector('thead');
    const body = this.tableElement.nativeElement.querySelector('tbody');
    const tableBoundingRect = this.tableElement.nativeElement.getBoundingClientRect();
    const bodyHeight = window.document.body.clientHeight - (tableBoundingRect.top + 20 + window.scrollY + head.scrollHeight);
    body.style.height = bodyHeight + 'px';
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

  sortTargetDidSelect(index: number) {
    console.log('sort by column index', index);
    if (this.sortTargetColumn === index) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.sortTargetColumn = index;
      this.isSortAscending = true;
    }

    this.sort();
  }

  sort() {
    if (!Array.isArray(this.cars) || this.cars.length === 0) {
      return;
    }
    if (this.sortTargetColumn < 0) {
      return;
    }
    const key = this.displayedColumns[this.sortTargetColumn];
    this.cars = this.cars.sort((left, right) => {
      const isNotANumber = isNaN(Number(left[key])) || isNaN(Number(right[key]));
      const leftValue = isNotANumber ? left[key] : Number(left[key]);
      const rightValue = isNotANumber ? right[key] : Number(right[key]);
      if (leftValue > rightValue) {
        return this.isSortAscending ? 1 : -1;
      }
      if(leftValue < rightValue) {
        return this.isSortAscending ? -1 : 1;
      }
      return 0;
    });
  }

  saveButtonDidSelect() {
    this.isLoading = true;
    let carDictionary = {};
    this.cars.map(car => {
      carDictionary[car.index] = car;
    });
    const cars = this.data.cars.map(car => carDictionary[car.index]);
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

  ngOnDestroy() {
    this.windowHeightSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
