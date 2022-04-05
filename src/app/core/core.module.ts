import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchWithButtonComponent } from './components/header/search-with-button/search-with-button.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/header/auth/auth.component';

@NgModule({
  declarations: [
    LogoComponent,
    SearchWithButtonComponent,
    SettingsButtonComponent,
    FilterComponent,
    HeaderComponent,
    AuthComponent,
    ErrorPageComponent,
  ],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [
    LogoComponent,
    SearchWithButtonComponent,
    SettingsButtonComponent,
    FilterComponent,
    HeaderComponent,
  ],
})
export class CoreModule {}
