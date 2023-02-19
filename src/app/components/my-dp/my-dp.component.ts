import { Component, Input } from '@angular/core';
import { MatDatepickerControl } from
      '@angular/material/datepicker';
@Component({
  selector: 'app-my-dp',
  templateUrl: './my-dp.component.html',
  styleUrls: ['./my-dp.component.css']
})
export class MyDpComponent {
  @Input() startDate = Date.now;
  @Input() testStr = "abc";
  @Input() myDate = new Date(1966, 11, 23);
}


// <mat-form-field>
//   <input matInput [matDatepicker]="picker" placeholder="Choose a date">
//   <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
//   <mat-datepicker [startAt]="startDate" #picker></mat-datepicker>
// </mat-form-field>
