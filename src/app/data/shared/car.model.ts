import { BaseModel, BaseModelMap, BaseModelFilter } from '../../core/model';

export class Car extends BaseModel {

  static _map: BaseModelMap = new BaseModelMap({
    id: '_id',
  });

  static _filter: BaseModelFilter = new BaseModelFilter({
    id: (object) => object.$oid,
  });

  static columns = {
    brand: 'brand',
    carcode: 'carcode',
    cylinder_arrangement: 'cylinder_arrangement',
    cylinders: 'cylinders',
    discontinue: 'discontinue',
    displacement: 'displacement',
    display_name: 'display_name',
    efficiency: 'efficiency',
    efficiency_sport: 'efficiency_sport',
    engine_layout: 'engine_layout',
    engine_position: 'engine_position',
    gearbox_level: 'gearbox_level',
    gearbox_type: 'gearbox_type',
    generation_name: 'generation_name',
    generation_sequence: 'generation_sequence',
    hp: 'hp',
    hp_at_rpm: 'hp_at_rpm',
    image_url: 'image_url',
    manufacturer: 'manufacturer',
    max_rpm: 'max_rpm',
    model: 'model',
    price_eu: 'price_eu',
    price_kr: 'price_kr',
    rejection_co2: 'rejection_co2',
    torque: 'torque',
    torque_from: 'torque_from',
    torque_to: 'torque_to',
    weight: 'weight',
    year: 'year',
  };

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
