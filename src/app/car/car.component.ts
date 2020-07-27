import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CarService } from './car.service';
import { Car, CarKey } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model?: CarKey
  formItems: any[] = []

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.getItem(id).subscribe(model => {
      this.model = model
      console.log('car model', model)

      this.formItems = Object.keys(model)
        .filter(key => key !== 'key')
        .map(key => ({ title: key, value: model[key] }))
    })
  }

  saveDidSelect() {
    if (!this.formItems.reduce((isChanged, item) => isChanged || this.model[item.title] !== item.value, false)) {
      console.log('no changes')
      return
    }

    this.carService.updateItem(this.model.key, this.formItems)
  }

}
