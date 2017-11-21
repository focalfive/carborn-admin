import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  getUser(userId: string): Observable<any> {
    return this.http.get('https://api.mlab.com/api/1/databases/carborn/collections/admin/5a12775a734d1d40318ba99c?apiKey=RVBlmzNJ6hMYAruIrDZtDfhUaKGKbbvQ')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
