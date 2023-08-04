import { Component, EventEmitter, Output } from '@angular/core';
import { ListsService } from '../services/lists.service';
import { IList } from '../model/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  listId = 1;
  @Output() pick = new EventEmitter<number>();
  @Output() edit = new EventEmitter<IList>();
  @Output() deleted = new EventEmitter<number>();

  lists = this.listsService.getLists();
  constructor(private listsService: ListsService) {}

  pickList(list: IList) {
    if (!list.id) return;
    this.listId = list.id;
    this.pick.emit(list.id);
  }

  saveList(list: IList) {
    this.listsService.saveList(list);
    this.lists = this.listsService.getLists();
  }

  deleteList(list: IList) {
    if (!list.id) return;
    this.listsService.deleteList(list);
    this.lists = this.listsService.getLists();
    this.deleted.emit(list.id);
  }

  onEdit(list: IList) {
    this.edit.emit(list);
  }
}
