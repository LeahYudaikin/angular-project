import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer.model';

@Injectable()
export class VolunteerService {

  constructor(private http: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>("api/Volunteer/Get");
  }

  getByIdVolunteer(id: number): Observable<Volunteer>{
    return this.http.get<Volunteer>(`api/Volunteer/Get/${id}`);
  }
  
  saveVolunteer(volunteer: Volunteer): Observable<Volunteer[]>{
    return this.http.put<Volunteer[]>("api/Volunteer/Put", volunteer);
  }

}
