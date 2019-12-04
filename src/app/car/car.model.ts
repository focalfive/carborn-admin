export class Car {
  brand: string;
  carcode: string;
  display_name: string;
  generation_name: string;
  generation_sequence: number;
  manufacturer: string;
}

export class CarKey extends Car {
  key: string;
}