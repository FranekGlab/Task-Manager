import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/app/model/task';

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(
    tasks: ITask[],
    state: 'todo' | 'doing' | 'done',
    listId: number
  ): ITask[] {
    return tasks.filter((t) => t.state === state && listId === t.listId);
  }
}
