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

  collection: any[];
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
        this.collection = data;
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

  addItemForRoot() {
    window.alert('TODO: addItemForRoot');
  }

  addItemFor(node) {
    node.children.push({ name: 'test', children: [] });
    console.log(this.collection);
    window.alert(`TODO: addItemFor ${node.name} sync`);
  }

  deleteItem(node) {
    if (this.deleteChild(this.collection, node)) {
      console.log('deleted')
      window.alert(`TODO: deleteItem ${node.name} sync`);
    }
    // console.log(this.collection);
  }

  deleteChild(collection, node): boolean {
    for (let i = 0; i < collection.length; ++i) {
      if (collection[i] === node) {
        collection.splice(i, 1);
        console.log('find');
        return true;
      }
      console.log(i, collection[i], collection[i].children);
      if (Array.isArray(collection[i].children) && this.deleteChild(collection[i].children, node)) {
        return true;
      }
    }
    return false;
  }

  moveItem(node) {
    window.alert('TODO: moveItem show dialog for select target');
  }

}
