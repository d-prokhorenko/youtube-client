import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  authStream$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isAuth
  );

  login(): void {
    this.isAuth = true;
    this.authStream$.next(this.isAuth);
    localStorage.setItem('userAuth', 'fakeToken');
  }

  logout(): void {
    this.isAuth = false;
    this.authStream$.next(this.isAuth);
    localStorage.removeItem('userAuth');
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
