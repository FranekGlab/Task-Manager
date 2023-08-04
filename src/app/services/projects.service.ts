import { Injectable } from '@angular/core';
import { IProject } from '../model/project';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private defaultProject: IProject = {
    id: 1,
    listsIds: [1],
  };

  constructor(private storageService: StorageService) {
    const storage = this.storageService.get('project');
    if (storage) {
      this.defaultProject = storage;
    }
  }

  getProject() {
    return { ...this.defaultProject };
  }

  addToProject(listId: number) {
    this.defaultProject.listsIds.push(listId);
    this.storageService.save('project', this.defaultProject);
  }

  deleteFromProject(listId: number) {
    this.defaultProject.listsIds = this.defaultProject.listsIds.filter(
      (id) => id !== listId
    );
    this.storageService.save('project', this.defaultProject);
  }
}
