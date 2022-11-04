import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  userData$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  userData: Observable<any> = this.userData$.asObservable();

  constructor() {}
}
