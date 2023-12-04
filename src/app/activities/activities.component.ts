import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import ActivityModel from '../models/ActivityModel';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  activity: string = ""
  acts: Array<ActivityModel> = [];

  addActivity() {
    let a: ActivityModel = new ActivityModel(this.activity);
    this.acts.push(a);
    this.activity = "";
  }
}
