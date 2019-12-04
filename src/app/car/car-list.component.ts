import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CarService } from './car.service';
import { CarKey } from './car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  private collection: Observable<CarKey[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
  ) { }

  ngOnInit() {
    this.collection = this.carService.getList()
  }

  listDidSelect(key: string) {
    this.router.navigate(['car', key]);
  }

}
