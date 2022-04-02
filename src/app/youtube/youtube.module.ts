import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './pages/search/search.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { CheckDateDirective } from './directives/check-date.directive';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CheckDateDirective,
    SearchFilterPipe,
  ],
  imports: [CommonModule],
  exports: [SearchComponent],
})
export class YoutubeModule {}
