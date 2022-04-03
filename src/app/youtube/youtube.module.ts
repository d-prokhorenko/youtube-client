import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './pages/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { CheckDateDirective } from './directives/check-date.directive';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ItemDetailedComponent } from './pages/item-detailed/item-detailed.component';
import { ItemStatisticsComponent } from './components/search/search-item/item-statistics/item-statistics.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from './services/youtube.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: YoutubeInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CheckDateDirective,
    SearchFilterPipe,
    ItemDetailedComponent,
    ItemStatisticsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CoreModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [SearchComponent],
})
export class YoutubeModule {}
