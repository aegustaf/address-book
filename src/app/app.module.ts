import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // Added here

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { NewEntryFormComponent } from './new-entry-form/new-entry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryProfileComponent } from './entry-profile/entry-profile.component';
import { EditEntryFormComponent } from './edit-entry-form/edit-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    NewEntryFormComponent,
    EntryProfileComponent,
    EditEntryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
