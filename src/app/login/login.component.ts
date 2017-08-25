import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { LoginService } from './shared/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private loginService: LoginService,
    ) { }

    ngOnInit() {
        const params = new URLSearchParams(this.location.path(true).split('?')[1]);
        const code = params.get('code')
        if (code) {
            this.loginService.getAccessToken(code).subscribe(
                res => {

                },
                err => {

                }
            )
        }


    }

    loginButtonDidSelect() {
        this.loginService.navigateToGoogleLogin();
    }

}
