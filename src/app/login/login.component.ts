import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { URLSearchParams } from '@angular/http';

import { LoginService } from './shared/login.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private code: string = null;

  constructor(
    private location: Location,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.parseUriCode();
  }

  parseUriCode() {
    const params = new URLSearchParams(this.location.path(true).split('?')[1]);
    const code = params.get('code');
    this.code = code;
    if (code) {
      this.getToken(code);
    }
  }

  getToken = (code: string) => {
    this.loginService.getAccessToken(code).subscribe(
      res => {
        if (!this.parseAccessToken(res)) {
          this.code = null;
        }
      },
      err => {
        this.code = null
      }
    );
  }

  parseAccessToken = (data: any): boolean => {
    if (typeof data.access_token === 'string' &&
    typeof data.expires_in === 'number') {
      User.shared.updateAuthInfo(this.code, data.access_token, data.expires_in, this.getToken);
      return true;
    }

    return false;
  }

  loginButtonDidSelect() {
    this.loginService.navigateToGoogleLogin();
  }

}
