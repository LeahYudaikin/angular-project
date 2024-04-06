import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SchedulingModule } from './scheduling/scheduling.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { VolunteerListComponent } from './volunteer/volunteer-list/volunteer-list.component';
import { HttpClientModule } from "@angular/common/http";
import { VolunteerDetailsComponent } from './volunteer/volunteer-details/volunteer-details.component';
import { SchedulingComponent } from './scheduling/scheduling/scheduling.component';

const ROUTES: Routes = [
  { path:"VolunteerList" , component: VolunteerListComponent },
  { path:"Scheduling" , component: SchedulingComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SchedulingModule, VolunteerModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }