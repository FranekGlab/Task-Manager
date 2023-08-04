export interface ITask {
  id?: number;
  name: string;
  state: 'todo' | 'doing' | 'done';
  listId: number;
}
