import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  isCheckingPermissions = false;
  private isAdmin = false;
  private userId = '';
  private id = null;

  constructor(
    protected activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.isCheckingPermissions = true;

    User.shared.getIsAdmin().subscribe(
      isAdmin => {
        this.isCheckingPermissions = false;
        if (isAdmin) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      },
      err => {
        console.error('Check admin error');
      }
    );

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['dataId']) {
        this.id = params['dataId'];
      }
    });
  }

  showUserId() {
    this.userId = User.shared.id;
  }

}
