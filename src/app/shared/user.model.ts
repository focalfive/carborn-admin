import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Cookie } from '../util/cookie';

export class User {

  static _shared: User = null;
  static get shared(): User {
    if (null === User._shared) {
      User._shared = new User();
    }

    return User._shared;
  }

  private _isLogin = Cookie.shared.getItem('user_id') != null;
  get isLogin(): boolean {
    return this._isLogin;
  }
  private _isLoginBehavior = new BehaviorSubject<boolean>(this.isLogin);
  get loginStatus(): Observable<boolean> {
    return this._isLoginBehavior.asObservable();//.startWith(this.isLogin);
  }
  // private _id: string = null;
  get id(): string {
    return Cookie.shared.getItem('user_id');
    // return this._id;
  }
  // private _name: string = null;
  get name(): string {
    return Cookie.shared.getItem('user_name');
    // return this._name;
  }
  // private _email: string = null;
  get email(): string {
    return Cookie.shared.getItem('user_email');
    // return this._email;
  }
  // private _accessToken: string = null;
  get accessToken(): string {
    return Cookie.shared.getItem('user_accessToken');
    // return this._accessToken;
  }
  // private _code: string = null;
  private get code(): string {
    return Cookie.shared.getItem('user_code');
    // return this._accessToken;
  }
  private _tokenRefreshTimeout: number = -1;

  constructor() {
    let tokenExpireDateString = Cookie.shared.getItem('user_tokenExpireDate');
    if (tokenExpireDateString !== null && tokenExpireDateString.length > 0, !isNaN(Number(tokenExpireDateString))) {
      let tokenExpireDate = new Date(Number(tokenExpireDateString));
      if (new Date() > tokenExpireDate) {
        this.clean();
      }
    }
  }

  updateAuthInfo(code: string, accessToken: string, expiresIn: number, refreshCallback: Function) {
    var now = (new Date()).getTime();
    let expireAfter = Math.max(30, expiresIn - 30) * 1000;
    let expireDate = new Date(now + expireAfter);
    Cookie.shared.setItem('user_accessToken', accessToken);
    // this._accessToken = accessToken;
    Cookie.shared.setItem('user_code', code);
    Cookie.shared.setItem('user_tokenExpireDate', expireDate.getTime().toString());
    // this._code = code;
    if (this._tokenRefreshTimeout >= 0) {
      clearTimeout(this._tokenRefreshTimeout);
    }
    this._tokenRefreshTimeout = setTimeout(() => {
      refreshCallback(this.code);
    }, expireAfter);
  }

  updateUserInfo(userId: string = null, userName: string = null, userEmail: string = null) {
    const isChanged = this.id !== userId;
    Cookie.shared.setItem('user_id', userId);
    // this._id = userId;
    Cookie.shared.setItem('user_name', userName);
    // this._name = userName;
    Cookie.shared.setItem('user_email', userEmail);
    // this._email = userEmail;
    this._isLogin = userId !== null;
    if (isChanged) {
      this._isLoginBehavior.next(this._isLogin);
    }
  }

  clean() {
    const isChanged = this._isLogin;
    Cookie.shared.removeItem('user_id');
    Cookie.shared.removeItem('user_name');
    Cookie.shared.removeItem('user_email');
    Cookie.shared.removeItem('user_accessToken');
    Cookie.shared.removeItem('user_code');
    Cookie.shared.removeItem('user_tokenExpireDate');
    this._isLogin = false;

    if (isChanged) {
      this._isLoginBehavior.next(this._isLogin);
    }
  }

}
