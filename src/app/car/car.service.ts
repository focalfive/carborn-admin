import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { Car, CarKey } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private schemes: any = { };

  constructor(
    private db: AngularFirestore,
  ) {
    let schemeName = 'cars';
    this.getScheme(schemeName).subscribe(scheme => {
      this.schemes[schemeName] = scheme
      console.log(schemeName, 'scheme is', scheme)
    })
  }

  getScheme(name: string): Observable<any> {
    return this.db.doc<any>(`scheme/${name}`)
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(action => action.payload.data())
      );
  }

  getList(): Observable<CarKey[]> {
    return this.db.collection<Car>('cars')
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(this.parseCarCollectionByChangeAction)
      );
  }

  getItem(id: string): Observable<CarKey> {
    console.log('getItem', id)
    return this.db.doc<Car>(`cars/${id}`)
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(this.parseCarModelByAction)
      );
  }

  updateItem(id: string, formItems: any[]) {
    // let model = formItems.reduce((model, item) => {
    //   if (typeof item['title'] === 'string' && typeof item['value'] !== 'undefined') {
    //     console.log(item.title, item.value, typeof item.value)
    //     model[item.title] = item.value
    //   }
    //   return model
    // }, {})
    // let meta = new Car()
    let scheme = this.schemes['cars'];
    console.log('type', Car.prototype)
    let model = formItems.reduce((model, item) => {
      if (typeof item['title'] === 'string' && typeof item['value'] !== 'undefined') {
        let key = item.title
        let typeString = scheme[key]
        console.log(key, item.value, typeof item.value, typeString)
        const valueType = typeof item.value
        if (valueType === typeString) {
          model[key] = item.value
        } else if(valueType === 'string') {
          switch (typeString) {
            case 'string':
              model[key] = String(item.value)
              break
    
            case 'number':
              if (!isNaN(item.value)) {
                model[key] = Number(item.value)
              }
              break
          }
        }
      }
      return model
    }, {})

    console.log('fire update', model)
    let doc = this.db.doc<Car>(`cars/${id}`)
    console.log('doc', doc)
    doc.update(model)
  }

  private parseData(schemeName: string, data: any, isStrict: boolean = true, isSetNull: boolean = false): any {
    if (typeof this.schemes[schemeName] !== 'object') {
      return data;
    }
    let scheme = this.schemes[schemeName];
    // let keys = Object.keys(data);
    let keys = [...new Set([...Object.keys(data), ...Object.keys(scheme)])]
    return keys.reduce((res, key) => {
      const schemeType = scheme[key];
      if (typeof schemeType !== 'string' && !isStrict) {
        res[key] = data[key];
      } else {
        if (typeof data[key] === schemeType) {
          res[key] = data[key];
        } else {
          if (isSetNull) {
            res[key] = null;
          } else {
            res[key] = data[key];
          }
        }
      }
      console.log('parse', key, schemeType, res[key])
      return res;
    }, {});
  }

  private parseCarCollectionByChangeAction = (actions: DocumentChangeAction<Car>[]): CarKey[] => {
    if (!actions) {
      return [];
    }
    return actions.map(this.parseCarModelByChangeAction).filter(action => !!action);
  }
  
  private parseCarModelByChangeAction = (action: DocumentChangeAction<Car>): CarKey => {
    if (!action) {
      return null;
    }
    const key = action.payload.doc.id;
    const data = action.payload.doc.data();
    return { key, ...this.parseData('cars', data) } as CarKey;
  }

  private parseCarModelByAction = (action: Action<QueryDocumentSnapshot<Car>>): CarKey => {
    console.log('parseCarModelByAction')
    if (!action) {
      return null;
    }
    console.log('parseCarModelByAction', action.payload.data())
    const key = action.payload.id
    const data = action.payload.data();
    return { key, ...this.parseData('cars', data) } as CarKey;
  }

}
