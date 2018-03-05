import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class DataEditorComponent implements OnChanges, OnInit {

  private dataList: Data[] = [];
  private data: Data;
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
        this.data = data;
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
