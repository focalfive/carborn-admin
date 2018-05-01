import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
const API_KEY: string = environment.mLabApiKey;
const ADMIN_ID: string = environment.mLabApiAdminObjectId;

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  getUser(userId: string): Observable<any> {
    return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/env/${ADMIN_ID}?apiKey=${API_KEY}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
