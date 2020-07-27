import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(
    private db: AngularFirestore,
  ) { }
  
  getCarScheme(): Observable<any> {
    return this.db.doc<any>('scheme/cars')
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(action => action.payload.data())
      )
  }

  updateCarScheme(formItems: any[]) {
    this.db.doc<any>('scheme/cars').update(
      formItems.reduce((model, item) => {
        if (typeof item['title'] === 'string' && typeof item['value'] !== 'undefined') {
          let key = item.title
          model[key] = item.value
        }
        return model
      }, {})
    )
  }

  addCarScheme(name: string, type: string) {
    console.log('Add new scheme for car', name, type)
    let model = {}
    model[name] = type
    this.db.doc<any>('scheme/cars').update(model)
  }

  deleteCarScheme(name: string) {
    console.log('Delete scheme for car', name)
    const fieldValue = firebase.firestore.FieldValue
    let model = {}
    model[name] = fieldValue.delete()
    this.db.doc<any>('scheme/cars').update(model)
  }

}
