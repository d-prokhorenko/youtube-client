import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authStream$.subscribe((isAuth) => {
      this.isAuth = isAuth;
    });
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
