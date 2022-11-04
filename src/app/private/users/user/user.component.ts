import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserPost } from 'src/app/shared/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() userData: IUserPost;

  constructor() {}

  ngOnInit(): void {}
}
