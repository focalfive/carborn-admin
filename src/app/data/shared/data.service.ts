import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Data } from '../data.model'
import { environment } from '../../../environments/environment';
const API_KEY: string = environment.mLabApiKey;

@Injectable()
export class DataService {

  constructor(
    private http: Http,
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

}
