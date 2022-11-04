import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  finalize,
  first,
  from,
  map,
  mergeMap,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { IPost, IUser, IUserPost } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';
  private userMappedPosts$ = new BehaviorSubject<any>([]);

  userMappedPosts: Observable<IUserPost> = this.userMappedPosts$.asObservable();

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  getUserData(): Observable<IUserPost[]> {
    this.loaderService.isLoading$.next(true);

    return this.http.get<IUser[]>(`${this.BASE_URL}/users`).pipe(
      first(),
      switchMap((users) => {
        return this.http.get<IPost[]>(`${this.BASE_URL}/posts`).pipe(
          map((posts: IPost[]) => {
            return users.map((user: IUser) => {
              return {
                ...user,
                posts: [...posts.filter((post) => post.userId === user.id)],
              };
            });
          })
        );
      }),
      finalize(() => {
        this.loaderService.isLoading$.next(false);
      })
    );
    // .subscribe((data) => {
    //   this.userMappedPosts$.next(data);
    // });
  }
}
