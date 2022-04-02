import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './pages/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { CheckDateDirective } from './directives/check-date.directive';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ItemDetailedComponent } from './pages/item-detailed/item-detailed.component';
import { ItemStatisticsComponent } from './components/search/search-item/item-statistics/item-statistics.component';

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
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
})
export class YoutubeModule {}
