import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){
  }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe((tasks) => this.tasks= tasks);
  }


  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.getTasksSubscription())
      );
  }



  updateTask(task: Task) {
    this.taskService
    .updateTask(task)
    .subscribe(
      () => (this.getTasksSubscription())
      );
    }

  addTask(task: Task){
    console.log(task);
  }
  private getTasksSubscription(): Subscription {
    return this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
