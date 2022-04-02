import { NgModule } from '@angular/core';

import { LoginComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
