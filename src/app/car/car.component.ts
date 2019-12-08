import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CarService } from './car.service';
import { CarKey } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  private model: Observable<CarKey>;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.model = this.carService.getItem(id)
  }

}
