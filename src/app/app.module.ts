import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ByWordInputComponent } from './components/filter/by-word-input/by-word-input.component';
import { SortngButtonsComponent } from './components/filter/sortng-buttons/sortng-buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchWithButtonComponent } from './components/header/search-with-button/search-with-button.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { SearchComponent } from './components/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { LoginComponent } from './components/header/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ByWordInputComponent,
    SortngButtonsComponent,
    HeaderComponent,
    LogoComponent,
    SearchWithButtonComponent,
    SettingsButtonComponent,
    SearchComponent,
    SearchItemComponent,
    SearchResultsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
