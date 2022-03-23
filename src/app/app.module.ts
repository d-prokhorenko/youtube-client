import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ByWordInputComponent } from './filter/by-word-input/by-word-input.component';
import { SortngButtonsComponent } from './filter/sortng-buttons/sortng-buttons.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchWithButtonComponent } from './header/search-with-button/search-with-button.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { SearchComponent } from './search/search.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
