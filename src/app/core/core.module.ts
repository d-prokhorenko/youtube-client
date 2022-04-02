import { NgModule } from '@angular/core';

import { FilterComponent } from './components/header/filter/filter.component';
import { HeaderComponent } from './pages/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchWithButtonComponent } from './components/header/search-with-button/search-with-button.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    LogoComponent,
    SearchWithButtonComponent,
    SettingsButtonComponent,
    FilterComponent,
    HeaderComponent,
  ],
  imports: [FormsModule, AuthModule],
  exports: [
    LogoComponent,
    SearchWithButtonComponent,
    SettingsButtonComponent,
    FilterComponent,
    HeaderComponent,
  ],
})
export class CoreModule {}
