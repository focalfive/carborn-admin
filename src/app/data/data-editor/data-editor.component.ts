import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.css']
})
export class DataEditorComponent implements OnInit {

  private dataList: Data[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.dataService.getList().subscribe(
      (list: Data[]) => {
        this.dataList = list as Data[];
        console.log('this.dataList', this.dataList);
      },
      err => {
        console.error('Error', err);
      }
    )
  }

}
