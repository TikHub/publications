import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';

import { IPost, IUserPost } from '../../shared/interfaces';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
// import { routes } from './users-routing.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent /* RouterModule.forChild(routes) */],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userData: IUserPost[];

  constructor(
    private usersService: UsersService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.userData.subscribe((data) => {
      if (data) {
        this.userData = data;
      }
    });
  }
}
