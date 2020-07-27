import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private db: AngularFirestore,
  ) { }
  
  getMenuList(): Observable<any[]> {
    return this.db.collection<any[]>('menu')
      .snapshotChanges()
      .pipe(
        debounceTime(500),
        map(actions => actions.map(action => action.payload.doc.data()))
      )
  }

  // updateMenu(formItems: any[]) {
  //   this.db.doc<any>('scheme/cars').update(
  //     formItems.reduce((model, item) => {
  //       if (typeof item['title'] === 'string' && typeof item['value'] !== 'undefined') {
  //         let key = item.title
  //         model[key] = item.value
  //       }
  //       return model
  //     }, {})
  //   )
  // }

  // addMenu(name: string, type: string) {
  //   console.log('Add new scheme for car', name, type)
  //   let model = {}
  //   model[name] = type
  //   this.db.doc<any>('scheme/cars').update(model)
  // }

  // deleteMenu(name: string) {
  //   console.log('Delete scheme for car', name)
  //   const fieldValue = firebase.firestore.FieldValue
  //   let model = {}
  //   model[name] = fieldValue.delete()
  //   this.db.doc<any>('scheme/cars').update(model)
  // }

}
