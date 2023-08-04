import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITask } from 'src/app/model/task';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss'],
})
export class TasksFormComponent {
  @Output() save = new EventEmitter<ITask>();
  @Input() listId!: number;

  oldTask: ITask | null = null;
  todoForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  saveTask() {
    const { name } = this.todoForm.value;
    const task: ITask = {
      ...(this.oldTask || {
        state: 'todo',
        listId: this.listId,
      }),
      name,
    };
    this.todoForm.reset();
    this.oldTask = null;
    this.save.emit(task);
  }

  setEditMode(task: ITask) {
    this.todoForm.controls['name'].setValue(task.name);
    this.oldTask = task;
  }
}
