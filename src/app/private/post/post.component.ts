import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost;

  constructor() {}

  ngOnInit(): void {}
}
