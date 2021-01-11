import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.userService.user$.pipe(
      take(1),
      map(user => {
        if (!user) {
          return false;
        }
        if (user.isVerified) {
          return true;
        }
        console.log('url', this.router.url);
        this.userService.redirectUri = this.router.url;
        this.router.navigate(['/verify']);
        return false;
      }),
      tap(loggedIn => {
          if (!loggedIn) {
              this.userService.redirectUri = this.router.url;
              this.router.navigate(['/login']);
          }
      })
    )

  }
  
}
