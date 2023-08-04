import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tasks-user',
  templateUrl: './tasks-user.component.html',
  styleUrls: ['./tasks-user.component.scss'],
})
export class TasksUserComponent {
  user = this.usersService.getUser();
  constructor(private usersService: UsersService) {}
}
