import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from  '@angular/router';

import { User } from '../user.model';

@Component({
  selector: 'app-gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./gnb.component.scss']
})
export class GnbComponent implements OnInit {

  private isLogin: boolean = User.shared.isLogin;
  isLoginComponent: boolean = false;

  constructor(
    private location: Location,
    private router: Router,
  ) {
    router.events.subscribe(
      event => {
        this.isLoginComponent = window.location.pathname === '/login';
      }
    );
  }

  ngOnInit() {
    this.isLoginComponent = window.location.pathname === '/login';
    User.shared.loginStatus.subscribe(
      isLogin => {
        this.isLogin = isLogin;
        if (!this.isLoginComponent && !isLogin) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  logoutDidSelect() {
    User.shared.clean();
  }

}
