import { Component, OnInit, Input } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() backRoute: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.userService.signOut();
  }

  back() {
    if (!this.backRoute) {
      return;
    }

    const temp = this.backRoute.split('?');
    if (temp.length === 0) {
      return;
    }
    const path = temp[0].split('/').filter($0 => $0.length > 0);
    const query = temp.length > 1 ? temp[1].split('&').reduce((v, c) => {
      const temp = c.split('=');
      if (temp.length === 2) {
       v[temp[0]] = temp[1];
      }
      return v;
    }, {}) : {};
    this.router.navigate(path, { queryParams: query });
  }

}
