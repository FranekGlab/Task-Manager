import { Injectable } from '@angular/core';
import { ITask } from '../model/task';
import { StorageService } from './storage.service';
import { ListsService } from './lists.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: ITask[] = [
    { id: 1, state: 'todo', name: 'Plant Seeds', listId: 1 },
    { id: 2, state: 'doing', name: 'Eat Soup', listId: 1 },
    { id: 3, state: 'done', name: 'Go Toilet', listId: 1 },
  ];

  constructor(
    private storageService: StorageService,
    private listsService: ListsService
  ) {
    const storage = this.storageService.get('tasks');
    if (storage) {
      this.tasks = [...storage];
    }
  }

  getTasks() {
    return [...this.tasks];
  }

  getTask(id: number) {
    return this.tasks.find((t) => t.id === id) || null;
  }

  saveTask(task: ITask) {
    if (!task.id) {
      this.addTask(task);
    } else {
      this.editTask(task);
    }
    this.moveTaskToLastIndex(task);
    this.storageService.save('tasks', this.tasks);
  }

  deleteTask(task: ITask) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.storageService.save('tasks', this.tasks);
  }

  deleteByListId(listId: number) {
    this.tasks = this.tasks.filter((t) => t.listId !== listId);
    this.storageService.save('tasks', this.tasks);
  }

  private moveTaskToLastIndex(task: ITask) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex === -1) return;
    const lastIndex = this.tasks.length - 1;
    const lastTask = this.tasks[lastIndex];
    this.tasks[taskIndex] = lastTask;
    this.tasks[lastIndex] = task;
  }

  private addTask(task: ITask) {
    const taskWithId = { ...task, id: Math.random() };
    this.tasks.push(taskWithId);

    const list = this.listsService.getList(task.listId);
    if (!list) return;
    this.listsService.addToList(list, task);
  }

  private editTask(newTask: ITask) {
    const taskIndex = this.tasks.findIndex((t) => t.id === newTask.id);
    const task = this.tasks[taskIndex];
    const updatedTask = { ...task, ...newTask };
    this.tasks[taskIndex] = updatedTask;
  }
}
