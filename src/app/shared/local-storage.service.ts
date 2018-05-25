import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  get(id: string, type: string = 'object'): any {
    try {
      const value = JSON.parse(localStorage.getItem(id));
      if (typeof value === type) {
        return value;
      }
    } catch (e) { }
    return null;
  }

  set(id: string, value: any) {
    try {
      localStorage.setItem(id, JSON.stringify(value));
    } catch (e) { }
  }

}
