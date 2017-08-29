import { Observable, BehaviorSubject } from 'rxjs/Rx';

export class User {

    static _shared: User = null;
    static get shared(): User {
        if (null === User._shared) {
            User._shared = new User();
        }

        return User._shared;
    }

    private _isLogin = false;
    get isLogin(): boolean {
        return this._isLogin;
    }
    private _isLoginBehavior = new BehaviorSubject<boolean>(false)
    get loginStatus(): Observable<boolean> {
        return this._isLoginBehavior.asObservable().startWith(this.isLogin);
    }
    private _name: string = null;
    get name(): string {
        return this._name;
    }
    private _email: string = null;
    get email(): string {
        return this._email;
    }
    private _accessToken: string = null;
    private _code: string = null;
    private _tokenRefreshTimeout: number = -1;

    updateAuthInfo(code: string, accessToken: string, expiresIn: number, refreshCallback: Function) {
        this._accessToken = accessToken;
        this._code = code;
        if (this._tokenRefreshTimeout >= 0) {
            clearTimeout(this._tokenRefreshTimeout);
        }
        this._tokenRefreshTimeout = setTimeout(() => {
            console.log('refreshCallback');
            refreshCallback(this._code);
        // }, expiresIn - 60);
        }, 3000);
    }

    updateUserInfo(userName: string = null, userEmail: string = null) {
        const isChanged = this._name !== userName
        this._name = userName;
        this._email = userEmail;
        this._isLogin = userName !== null;
        if (isChanged) {
            this._isLoginBehavior.next(this._isLogin);
        }
    }
}
