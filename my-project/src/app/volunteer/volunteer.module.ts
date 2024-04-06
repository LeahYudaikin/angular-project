import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerService } from './volunteer.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const T_ROUTES: Routes = [
  { path:"VolunteerDetails" , component: VolunteerDetailsComponent },
  { path:"VolunteerList/VolunteerDetails/:id" , component: VolunteerDetailsComponent }
];

@NgModule({
  declarations: [VolunteerListComponent,VolunteerDetailsComponent],
  providers: [VolunteerService],
  imports: [CommonModule, RouterModule.forChild(T_ROUTES), ReactiveFormsModule],
  exports: [VolunteerListComponent]
})
export class VolunteerModule { }
