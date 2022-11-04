import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUserPost } from 'src/app/shared/interfaces';
import { SharedService } from 'src/app/shared/services/shared.service';
import { finalize, first } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PostComponent } from '../../post/post.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  selectedUser: IUserPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.sharedService.userData.subscribe((data: IUserPost[]) => {
      if (data.length) {
        this.selectedUser = data.filter(
          (user: IUser) =>
            user.id === +this.activatedRoute.snapshot.params['id']
        )[0];
      }
    });
  }
}
