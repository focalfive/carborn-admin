import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable } from 'rxjs';

import { MenuService } from './menu.service';


// interface MenuNode {
//   name: string;
//   children?: MenuNode[];
// }


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  collection: Observable<any[]>;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  isLoading = false;

  constructor(
    private router:Router,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.getMenuList().subscribe(
      data => {
        console.log('data', data);
        this.dataSource.data = data;
        this.treeControl.dataNodes = data;
      }
    )
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  expandAllItem() {
    this.treeControl.expandAll();
  }

  collapseAllItem() {
    this.treeControl.collapseAll();
  }

}
