import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';

@NgModule({
  declarations: [AdminComponent, CreateCardFormComponent],
  exports: [AdminComponent],
})
export class AdminModule {}
