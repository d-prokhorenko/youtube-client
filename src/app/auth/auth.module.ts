import { NgModule } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  exports: [AuthComponent, LoginComponent],
})
export class AuthModule {}
