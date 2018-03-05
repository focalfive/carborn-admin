import { BaseModel, BaseModelMap, BaseModelFilter } from '../core/model';

export class Data extends BaseModel {

  static _map: BaseModelMap = new BaseModelMap({
    id: '_id',
    title: 'title'
  });

  static _filter: BaseModelFilter = new BaseModelFilter({
    id: (object) => object.$oid,
  });

  id: string;
  title: string;

}
