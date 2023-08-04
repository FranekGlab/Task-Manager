import { Component, ViewChild } from '@angular/core';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @ViewChild(TasksListComponent) tasksList!: TasksListComponent;
  listId = 1;

  setListId(listId: number) {
    this.listId = listId;
  }

  deleteTasksByListId(listId: number) {
    this.tasksList.deleteTasksByListId(listId);
  }
}
