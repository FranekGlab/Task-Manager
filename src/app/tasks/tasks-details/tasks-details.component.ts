import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IList } from 'src/app/model/list';
import { ListsService } from 'src/app/services/lists.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss'],
})
export class TasksDetailsComponent {
  taskId = this.route.snapshot.params['id'];
  task = this.tasksService.getTask(+this.taskId);
  list?: IList | null;
  
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private listsService: ListsService
  ) {
    if (this.task) {
      this.list = this.listsService.getList(this.task.listId);
    }
  }
}
