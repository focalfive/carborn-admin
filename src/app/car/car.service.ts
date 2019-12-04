import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { Car, CarKey } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private db: AngularFirestore,
  ) { }

  getList(): Observable<CarKey[]> {
    return this.db.collection<Car>('cars')
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(this.parseCarCollection)
      );
  }

  private parseCarCollection = (actions: DocumentChangeAction<Car>[]): CarKey[] => {
    if (!actions) {
      return [];
    }
    return actions.map(this.parseCarModel).filter(action => !!action);
  }
  
  private parseCarModel = (action: DocumentChangeAction<Car>): CarKey => {
    if (!action) {
      return null;
    }
    const key = action.payload.doc.id;
    const data = action.payload.doc.data();
    return { key, ...data } as CarKey;
  }

}
