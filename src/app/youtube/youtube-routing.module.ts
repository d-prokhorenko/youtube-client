import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailedComponent } from './pages/item-detailed/item-detailed.component';

const routes: Routes = [
  { path: 'search/:id', component: ItemDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
