import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    clientId: string = '896598308259-ctam2k664e2am1gob7khg1tg0hhj5peo.apps.googleusercontent.com';

    constructor() { }

    navigateToGoogleLogin() {
        location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=' + this.clientId +
            '&redirect_uri=' + location.href + '&scope=email%20profile';
    }

}
