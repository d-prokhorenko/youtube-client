import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { youtubeReducer } from './redux/reducers/youtube.reducer';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeEffect } from './redux/effects/youtube.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    EffectsModule.forRoot([YoutubeEffect]),
    StoreModule.forRoot({ youtube: youtubeReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
