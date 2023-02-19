import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  ngOnInit(): void {}


  @Output() onAddTask: EventEmitter<Task> =
    new EventEmitter();
  abc: string = "łała";
  text: string = "";
  day: string = "";
  myDate1: Date = new Date(1965, 12, 12);
  reminder: boolean = false;

  onSubmit(): void{
    if(!this.text){
      alert('please add a task text!');
      return;
    }

    const newTask = new Task();
    newTask.text = this.text;
    newTask.day = this.day;
    newTask.reminder = this.reminder;

    this.onAddTask.emit(newTask);

    // TODO - emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
