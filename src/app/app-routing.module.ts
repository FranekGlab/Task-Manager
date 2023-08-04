import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { TasksDetailsComponent } from './tasks/tasks-details/tasks-details.component';

const routes: Routes = [
  { path: '', component: UserPanelComponent },
  { path: ':id', component: TasksDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
