import { BaseModel, BaseModelMap, BaseModelFilter } from '../../core/model';

export class Car extends BaseModel {

  static _map: BaseModelMap = new BaseModelMap({
    id: '_id',
  });

  static _filter: BaseModelFilter = new BaseModelFilter({
    id: (object) => object.$oid,
  });

  id: string;
  brand: string;
  carcode: string;
  cylinder_arrangement: string;
  cylinders: number
  discontinue: string;
  displacement: string;
  display_name: string;
  efficiency: string;
  efficiency_sport: string;
  engine_layout: string;
  engine_position: string;
  gearbox_level: string;
  gearbox_type: string;
  generation_name: string;
  generation_sequence: number;
  hp: number;
  hp_at_rpm: number;
  image_url: string;
  manufacturer: string;
  max_rpm: number;
  model: string;
  price_eu: number;
  price_kr: number;
  rejection_co2: number;
  torque: number;
  torque_from: number;
  torque_to: number;
  weight: number;
  year: string;

}
