import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { delay, finalize, tap } from 'rxjs';
import { IPost, IUserPost } from './shared/interfaces';
import { UsersService } from './private/users/users.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LoaderService } from './shared/services/loader.service';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, LoaderComponent],
})
export class AppComponent implements OnInit {
  title = 'Posts';
  isLoading = false;

  constructor(
    private usersService: UsersService,
    private sharedService: SharedService,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((loadingState: boolean) => {
      this.isLoading = loadingState;
    });

    this.usersService.getUserData().subscribe((data: IUserPost[]) => {
      this.sharedService.userData$.next(data);
    });

    // this.getUserData();
  }

  // private getUserData() {
  //   this.loaderService.isLoading$.next(true);

  //   this.usersService.userMappedPosts.subscribe((data) => {
  //     if (data) {
  //       this.sharedService.userData$.next(data);
  //       this.loaderService.isLoading$.next(false);
  //     }
  //   });
  // }
}
