import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SchedulingModule { }