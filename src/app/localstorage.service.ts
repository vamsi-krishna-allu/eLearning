import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  isAuthenticated = new BehaviorSubject(false);

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
    this.isAuthenticated.next(true);
  }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
    this.isAuthenticated.next(false);
  }
}
