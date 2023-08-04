import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IList } from 'src/app/model/list';

@Component({
  selector: 'app-lists-form',
  templateUrl: './lists-form.component.html',
  styleUrls: ['./lists-form.component.scss'],
})
export class ListsFormComponent {
  @Output() save = new EventEmitter<IList>();
  oldList: IList | null = null;
  listForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  saveList() {
    const { name } = this.listForm.value;
    const list: IList = {
      ...(this.oldList || {
        tasksIds: [],
        projectId: 1,
      }),
      name,
    };
    this.listForm.reset();
    this.oldList = null;
    this.save.emit(list);
  }

  setEditMode(list: IList) {
    this.listForm.controls['name'].setValue(list.name);
    this.oldList = list;
  }
}
