import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Volunteer } from '../volunteer.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from '../volunteer.service';
import { SchedulingService } from 'src/app/scheduling/scheduling.service';
import { Scheduling } from 'src/app/scheduling/scheduling.model';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {

  daysList: string[] = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday"];
  private _volunteer: Volunteer = new Volunteer();
  volunteersList: Volunteer[] = [];
  flag: boolean = false;
  volunteerForm: FormGroup = new FormGroup({});
  private _scheduling: Scheduling = new Scheduling();

  constructor(private _acr: ActivatedRoute, private volunteerService: VolunteerService, private router: Router, private schedulingService: SchedulingService) {
    volunteerService.getByIdVolunteer(+ (this._acr.snapshot.paramMap.get('id') ?? '')).subscribe(data => {
      this._volunteer = data;
      this.volunteerForm = new FormGroup({
        "id": new FormControl(this.volunteer?.id),
        "firstName": new FormControl(this.volunteer?.firstName, [Validators.minLength(2), Validators.required]),
        "lastName": new FormControl(this.volunteer?.lastName, [Validators.minLength(2), Validators.required]),
        "phone": new FormControl(this.volunteer?.phone, [Validators.minLength(10), Validators.maxLength(11)]),
        "days": new FormArray(this._volunteer.days.map(day => new FormControl(day)))
      });
      this.flag = true;
    },
      err => { console.log(err); });

    schedulingService.getScheduling().subscribe(data => this._scheduling =
      data, err => { console.log(err); });
  }

  ngOnInit(): void {
  }

  public get volunteer(): Volunteer | undefined {
    return this._volunteer;
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }

  submitVolunteer() {
    try {
      if (this._volunteer != undefined)
        this._volunteer = this.volunteerForm.value;
      if (this._scheduling.schedule != undefined) {
        for (let i = 0; i < this._scheduling.schedule.length; i++) {
          if (this._volunteer.id == this._scheduling.schedule[i] && this._volunteer.days[i] == false)
            throw new Error("⚠️Error! Removing an error from a date embedded in the system");
        }
      }
      this.volunteerService.saveVolunteer(this.volunteerForm.value).subscribe(data => {
        this.volunteersList = data; 
        this.router.navigate(['/VolunteerList']);
      }, err => { console.log(err); });
    }
    catch (error) {
      alert(error);
      this.router.navigate(['/VolunteerList']);
    }
  }
}