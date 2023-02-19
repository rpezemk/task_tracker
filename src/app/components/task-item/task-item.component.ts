import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task  = new Task();
  @Output() onDeleteTask: EventEmitter<Task> =
    new EventEmitter<Task>();
  @Output() onToggleTask: EventEmitter<Task> =
    new EventEmitter<Task>();
  faTimes = faTimes;

  selected = false;


  onDelete(task: Task):void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task):void{
    task.reminder = !task.reminder;
    this.onToggleTask.emit(task)
  }


  onToggleSel(){
    console.log('toggle sel')
    this.selected = !this.selected;
  }

  ngOnInit():void {}



}
