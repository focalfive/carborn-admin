import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
const API_KEY: string = environment.mLabApiKey;

@Injectable()
export class DataService {

  constructor(
    private http: Http,
  ) { }

  getDatas(): Observable<any> {
    return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/cars/?apiKey=${API_KEY}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
