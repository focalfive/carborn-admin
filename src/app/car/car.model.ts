export class Car {
  brand?: string;
  carcode?: string;
  cylinder_arrangement?: string;
  cylinders?: number;
  discontinue?: string;
  displacement?: number;
  display_name?: string;
  efficiency?: number;
  efficiency_sport?: number;
  engine_layout?: string;
  engine_position?: string;
  engine_type1?: string;
  engine_type2?: string;
  fuel_type?: string;
  gearbox_level?: number;
  gearbox_type?: string;
  generation_name?: string;
  generation_sequence?: number;
  hp?: number;
  hp_at_rpm?: number;
  image_url?: string;
  manufacturer?: string;
  max_rpm?: number;
  model?: string;
  price_eu?: number;
  price_kr?: number;
  rejection_co2?: number;
  torque?: number;
  torque_from?: number;
  torque_to?: number;
  transmission_maker?: string;
  valves?: number;
  weight?: number;
  year?: number;
}

export class CarKey extends Car {
  key: string;
}