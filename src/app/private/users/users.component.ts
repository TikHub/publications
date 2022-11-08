import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IUserPost } from '../../shared/interfaces';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userData: IUserPost[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.userData.subscribe((data) => {
      if (data) {
        this.userData = data;
      }
    });
  }
}
