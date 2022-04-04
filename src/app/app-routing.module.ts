import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { HeaderComponent } from './core/pages/header/header.component';
import { ItemDetailedComponent } from './youtube/pages/item-detailed/item-detailed.component';
import { SearchComponent } from './youtube/pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
        loadChildren: () =>
          import('./youtube/youtube.module').then((m) => m.YoutubeModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'search/:id',
        component: ItemDetailedComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
