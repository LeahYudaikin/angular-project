import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent {

  volunteersList: Volunteer[] = [];

  constructor(private volunteerService: VolunteerService, private router: Router) {    
    volunteerService.getVolunteers().subscribe(data => this.volunteersList = data,
      err => { console.log(err); });    
  }

  ngOnInit(): void {
  }

  selectVolunteer(id: number) {
    this.router.navigate(['VolunteerList/VolunteerDetails/', id]);
  }

}
