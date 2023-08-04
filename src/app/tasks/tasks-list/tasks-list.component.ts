import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() listId!: number;
  @Output() edit = new EventEmitter<ITask>();
  tasks = this.tasksService.getTasks();

  constructor(private tasksService: TasksService, private router: Router) {}

  drop(event: CdkDragDrop<string>) {
    const prevState = event.previousContainer.data;
    const nextState = event.container.data;
    if (prevState === nextState) {
      return;
    }
    const task = event.item.data;
    this.saveTask({ ...task, state: nextState });
    this.tasks = this.tasksService.getTasks();
  }

  deleteTask(task: ITask) {
    this.tasksService.deleteTask(task);
    this.tasks = this.tasksService.getTasks();
  }

  deleteTasksByListId(listId: number) {
    this.tasksService.deleteByListId(listId);
    this.tasks = this.tasksService.getTasks();
  }

  onEdit(task: ITask) {
    this.edit.emit(task);
  }

  saveTask(task: ITask) {
    this.tasksService.saveTask(task);
    this.tasks = this.tasksService.getTasks();
  }

  redirectToDetails(task: ITask) {
    this.router.navigate([task.id]);
  }
}
