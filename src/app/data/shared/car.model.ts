import { BaseModel, BaseModelMap, BaseModelFilter } from '../../core/model';

export class Car extends BaseModel {

  static _map: BaseModelMap = new BaseModelMap({
    id: '_id',
  });

  static _filter: BaseModelFilter = new BaseModelFilter({
    id: (object) => object.$oid,
  });

  id: string;
  index: number;

}
