import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { NewEntryFormComponent } from './new-entry-form/new-entry-form.component';
import { EntryProfileComponent } from './entry-profile/entry-profile.component';
import { EditEntryFormComponent } from './edit-entry-form/edit-entry-form.component';
import { EntryActionsComponent } from './entry-actions/entry-actions.component';

const routes: Routes = [
  {
    path: '',
    component: EntriesComponent
  },
  {
    path: 'new-entry-form',
    component: NewEntryFormComponent
  },
  {
    path: 'entry-profile/:id',
    component: EntryProfileComponent
  },
  {
    path: 'entry-profile/:id/edit',
    component: EditEntryFormComponent
  },
  {
    path: 'entry-profile/:id/actions',
    component: EntryActionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
