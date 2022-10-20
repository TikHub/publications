import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';

import { IPost } from '../interfaces';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  data: IPost[] = [];
  users: any[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getPosts();
    this.usersService.getUsers();

    this.usersService.posts.subscribe((data: IPost[]) => {
      if (data) {
        this.data = data;
        console.log(this.data);
      }
    });
    this.usersService.users.subscribe((data: any[]) => {
      if (data) {
        this.users = data;
        console.log(this.users);
      }
    });
  }
}
