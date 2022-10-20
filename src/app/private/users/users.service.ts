import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, first, Observable } from 'rxjs';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';
  private posts$ = new BehaviorSubject<IPost[]>([]);
  private users$ = new BehaviorSubject<any[]>([]);

  posts: Observable<IPost[]> = this.posts$.asObservable();
  users: Observable<IPost[]> = this.users$.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): void {
    this.http
      .get(`${this.BASE_URL}/posts`)
      .pipe(
        first(),
        finalize(() => {
          // TODO: Disable loader
        })
      )
      .subscribe((posts: any) => {
        this.posts$.next(posts);
      });
  }

  getUsers(): void {
    this.http
      .get(`${this.BASE_URL}/users`)
      .pipe(
        first(),
        finalize(() => {
          // TODO: Disable loader
        })
      )
      .subscribe((users: any) => {
        this.users$.next(users);
      });
  }
}
