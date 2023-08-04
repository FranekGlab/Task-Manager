import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TasksComponent } from './tasks/tasks.component';
import { TasksFormComponent } from './tasks/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskFilterPipe } from './tasks/tasks-list/state.pipe';
import { TasksUserComponent } from './tasks/tasks-user/tasks-user.component';
import { ListsComponent } from './lists/lists.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ListsFormComponent } from './lists/lists-form/lists-form.component';
import { TasksDetailsComponent } from './tasks/tasks-details/tasks-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TasksFormComponent,
    TasksListComponent,
    TaskFilterPipe,
    TasksUserComponent,
    ListsComponent,
    UserPanelComponent,
    ListsFormComponent,
    TasksDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
