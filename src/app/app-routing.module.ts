import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { NewEntryFormComponent } from './new-entry-form/new-entry-form.component';

const routes: Routes = [
  // { path: '', redirectTo: 'entries', pathMatch: 'full' },
  {
    path: '',
    component: EntriesComponent 
  },
  {
    path: 'new-entry-form',
    component: NewEntryFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
