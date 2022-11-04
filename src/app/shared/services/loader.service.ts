import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.isLoading$.asObservable();

  constructor() {}
}
