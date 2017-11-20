import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

import { User } from './user.model';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  get isLogged(): boolean {
    // TODO: Develop about roogin or not
    return User.shared.isLogin;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canLoad(): boolean {
    if (!this.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
