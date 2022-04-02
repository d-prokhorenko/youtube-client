import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { HeaderComponent } from './core/pages/header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
