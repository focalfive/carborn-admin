import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  private isCheckingPermissions = false;
  private isAdmin = false;
  private userId = '';

  constructor() { }

  ngOnInit() {
    console.log('Checking permissions...');
    this.isCheckingPermissions = true;

    User.shared.getIsAdmin().subscribe(
      isAdmin => {
        this.isCheckingPermissions = false;
        if (isAdmin) {
          this.isAdmin = true;
          console.log('You are admin process display data!');
        } else {
          this.isAdmin = false;
          console.log('You are not admin cannot process data!');
        }
      },
      err => {
        console.error('Check admin error');
      }
    );
  }

  showUserId() {
    this.userId = User.shared.id;
  }

}
