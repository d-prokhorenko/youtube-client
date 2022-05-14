import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdminComponent, CreateCardFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [AdminComponent],
})
export class AdminModule {}
