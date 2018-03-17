import { BaseModel, BaseModelMap, BaseModelFilter } from '../../core/model';
import { Car } from './car.model';

export class Data extends BaseModel {

  static _map: BaseModelMap = new BaseModelMap({
    id: '_id',
    title: 'title',
    cars: 'cars'
  });

  static _filter: BaseModelFilter = new BaseModelFilter({
    id: (object) => object.$oid,
    cars: (array) => {
      return array.map(item => new Car(item));
    }
  });

  id: string;
  title: string;
  cars: Car[];

}
