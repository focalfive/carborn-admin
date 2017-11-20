import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit() {
    let isLogin = User.shared.isLogin;
    if (isLogin) {
    } else {
      this.parseUriCode();
    }
  }

  parseUriCode() {
    const params = new URLSearchParams(this.location.path(true).split('?')[1]);
    const code = params.get('code');
    this.code = code;
    if (code) {
      console.log('Start loading...');
      User.shared.loginStatus.subscribe(
        isLogin => {
          if (isLogin) {
            this.router.navigate(['/']);
          }
        }
      );
      this.getToken(code);
    }
  }

  getToken = (code: string) => {
    this.loginService.getAccessToken(code).subscribe(
      res => {
        if (this.parseAccessToken(res)) {
          this.getUserInfo();
        } else {
          this.code = null;
          console.error('There is no access token for login with google+');
        }
      },
      err => {
        this.code = null;
        this.router.navigate(['/login']);
      }
    );
  }

  getUserInfo = () => {
    let accessToken = User.shared.accessToken;
    if (accessToken != null && accessToken.length > 0) {
      this.loginService.googleUser(accessToken).subscribe(
        res => {
          User.shared.updateUserInfo(res.id, res.name, res.email);
        },
        err => {
          return;
        }
      );
    }
  }

  parseAccessToken = (data: any): boolean => {
    if (typeof data.access_token === 'string') {
      if (typeof data.expires_in === 'number') {
        User.shared.updateAuthInfo(this.code, data.access_token, data.expires_in, this.getToken);
      }
      return true;
    }

    return false;
  }

  loginButtonDidSelect() {
    this.loginService.navigateToGoogleLogin();
  }

}
