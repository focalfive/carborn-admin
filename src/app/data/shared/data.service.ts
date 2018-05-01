import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Column } from '../shared/column.model';
import { Data } from '../shared/data.model';
import { LocalStorageService } from '../../shared/local-storage.service';
import { environment } from '../../../environments/environment';
const API_KEY: string = environment.mLabApiKey;

@Injectable()
export class DataService {

  constructor(
    private http: Http,
    private localStorageService: LocalStorageService,
  ) { }

  getList(): Observable<Data[]> {
    // return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/cars/?f={"title": 1}&apiKey=${API_KEY}`)
    //   .map((res: Response) => res.json() as Data[])
    //   .catch((error: any) => Observable.throw(error || 'Server error'));
    return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/cars/?f={"title": 1}&apiKey=${API_KEY}`)
      .map((res: Response) => res.json().map(
        item => (new Data(item))))
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  get(id: string): Observable<Data> {
    return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/cars/${id}/?apiKey=${API_KEY}`)
      .map((res: Response) => new Data(res.json()))
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getAllKeys(list: any[]): string[] {
    let columns: string[] = [];
    list.map(item => {
      if (Array.isArray(item)) {
        return;
      }
      if (typeof item !== 'object') {
        return;
      }
      Object.keys(item).map(key => {
        if (columns.indexOf(key) < 0) {
          columns.push(key);
        }
      });
    });
    return columns;
  }

  private getStoredColumnsLocalStorageId(id: string): string {
    return `carborn_admin_data_service.column.${id}`;
  }

  getStoredColumns(id: string): Column[] {
    const key = this.getStoredColumnsLocalStorageId(id);
    const columns = this.localStorageService.get(key);
    if (columns === null) {
      return [];
    }
    return columns;
  }

  setStoredColumns(id: string, columns: Column[]) {
    const key = this.getStoredColumnsLocalStorageId(id);
    this.localStorageService.set(key, columns);
  }

  getDispayColumnKeys(columns: Column[]): string[] {
    const keys: string[] = [];
    if (columns.length > 0) {
      columns.map(column => {
        if (column.selected) {
          keys.push(column.key);
        }
      });
    }
    return keys;
  }

}
