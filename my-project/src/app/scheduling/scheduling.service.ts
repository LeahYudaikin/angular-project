import { Injectable } from '@angular/core';
import { Volunteer } from '../volunteer/volunteer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VolunteerService } from '../volunteer/volunteer.service';
import { Scheduling } from './scheduling.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  volunteerList: any;

  constructor(private http: HttpClient) { }

  getScheduling(): Observable<Scheduling> {
    return this.http.get<Scheduling>("api/Scheduling/Get");
  }

  saveScheduling(schedule:Scheduling): Observable<Scheduling>{
    return this.http.put<Scheduling>("api/Scheduling/Put", schedule);
  }

}