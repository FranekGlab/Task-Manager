import { Injectable } from '@angular/core';
import { IList } from '../model/list';
import { StorageService } from './storage.service';
import { ITask } from '../model/task';
import { ProjectsService } from './projects.service';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private lists: IList[] = [
    {
      id: 1,
      name: 'One',
      tasksIds: [1, 2, 3],
      projectId: 0,
    },
  ];

  constructor(
    private storageService: StorageService,
    private projectsService: ProjectsService,
  ) {
    const storage = this.storageService.get('lists');
    if (storage) {
      this.lists = [...storage];
    }
  }

  getLists(): IList[] {
    return [...this.lists];
  }

  getList(id: number): IList | null {
    return this.lists.find((l) => l.id === id) || null;
  }

  addToList(list: IList, task: ITask) {
    if (!task.id || !list.id) return;
    const l = this.lists.find((l) => l.id === list.id);
    if (!l) return;
    l.tasksIds.push(task.id);
    this.storageService.save('lists', this.lists);
  }

  deleteFromList(listId: number, taskId: number) {
    const list = this.getList(listId);
    if (!list) return;
    list.tasksIds.push(taskId);
    this.storageService.save('lists', this.lists);
  }

  saveList(list: IList) {
    if (!list.id) {
      this.addList(list);
    } else {
      this.editList(list);
    }
    this.storageService.save('lists', this.lists);
  }

  deleteList(list: IList) {
    this.lists = this.lists.filter((l) => l.id !== list.id);
    this.storageService.save('lists', this.lists);

    if (!list.id) return;
    this.projectsService.deleteFromProject(list.id);
  }

  private addList(list: IList) {
    const listWithId = { ...list, id: Math.random() };
    this.lists.push(listWithId);
    this.projectsService.addToProject(listWithId.id);
    this.storageService.save('lists', this.lists);
  }

  private editList(newList: IList) {
    const listIndex = this.lists.findIndex((t) => t.id === newList.id);
    const list = this.lists[listIndex];
    const updatedTask = { ...list, ...newList };
    this.lists[listIndex] = updatedTask;
  }
}
