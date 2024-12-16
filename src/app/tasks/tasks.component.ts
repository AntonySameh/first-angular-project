import {
  Component,
  signal,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { Title } from '@angular/platform-browser';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) userId!: string;
  @Input() name?: string;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // completedTask(taskId: string) {
  //   console.log('Task completed:', taskId);
  //   this.tasksService.removeTask(taskId);
  // }

  onStartAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseAddingTask() {
    this.isAddingTask = false;
  }
}
