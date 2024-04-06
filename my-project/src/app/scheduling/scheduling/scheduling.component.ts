import { Component, OnInit } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { Volunteer } from 'src/app/volunteer/volunteer.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Scheduling } from '../scheduling.model';
import { VolunteerService } from 'src/app/volunteer/volunteer.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  daysList: string[] = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday"];
  scheduling: Scheduling = new Scheduling();
  volunteerList: Volunteer[] = [];
  scheduleForm: FormGroup = new FormGroup({});
  flag: boolean = false;

  constructor(private schedulingService: SchedulingService, private volunteerService: VolunteerService) {
    this.volunteerService.getVolunteers().subscribe(data => {
      this.volunteerList = data;
      schedulingService.getScheduling().subscribe(data => {
        this.scheduling = data;
        this.scheduleForm = new FormGroup({
          "schedule": new FormArray(this.scheduling.schedule.map(id => new FormControl(id)))
        });
        this.flag = true;
      },
        err => { console.log(err); });
    });
  }

  get schedule(): FormArray {
    return this.scheduleForm.get('schedule') as FormArray;
  }

  getVoluteersByDay(day: number): Volunteer[] {
    return this.volunteerList.filter(v => v.days[day] == true);
  }

  submitScheduling() {
    this.schedulingService.saveScheduling(this.scheduleForm.value).subscribe(data => {
      this.scheduling = data;
    });
    alert("Scheduling-UpDate😇")
    this.schedulingService.getScheduling().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
  }

}
