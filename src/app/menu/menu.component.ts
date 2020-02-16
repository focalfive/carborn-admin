import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private collection: Observable<any[]>

  constructor(
    private router: Router,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.collection = this.menuService.getList()
  }

}
