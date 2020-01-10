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

  // private model: Observable<CarKey>;
  private model?: CarKey
  private formItems: any[] = []
  private types: any

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.model = this.carService.getItem(id)
    this.carService.getItem(id).subscribe(model => {
      this.model = model

      // let nonKeyModel
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

    // let model = new Car()
    // for (let key in this.formItems) {
    //   let typeString = typeof model[key]
    //   if (typeof this.formItems[key] === typeString) {
    //     model[key] = this.formItems[key]
    //   } else {
    //     switch (typeString) {
    //       case 'string':
    //         model[key] = String(this.formItems[key])
    //         break

    //       case 'number':
    //         if (!isNaN(this.formItems[key])) {
    //           model[key] = Number(this.formItems[key])
    //         }
    //         break

    //     }
    //   }
    // }
    // this.carService.updateItem(this.model.key, model)
  }

}
