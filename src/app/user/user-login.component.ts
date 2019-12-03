import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
  ) {
    this.user = userService.user$;
  }

  ngOnInit() {
  }

  login() {
    this.userService.googleSignin().then((s) => {
      const redirectUri = this.userService.redirectUri;
      if(!!redirectUri) {
        this.userService.redirectUri = null;
        this.router.navigate([redirectUri]);
      } else if (this.userService.storedUri) {
        this.router.navigate([this.userService.storedUri]);
      } else {
        // this.router.navigate(['/']);
      }
    });
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

}
