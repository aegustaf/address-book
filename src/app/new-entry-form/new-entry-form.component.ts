import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Entry } from '../entries/entry';
import { EntriesList } from '../entries/entries-list';
import { IdAssignment } from '../entries/id-assignment';

@Component({
  selector: 'app-new-entry-form',
  templateUrl: './new-entry-form.component.html',
  styleUrls: ['./new-entry-form.component.scss']
})
export class NewEntryFormComponent implements OnInit {

  newEntryForm: FormGroup;
  displayWarning: boolean;

  constructor(private formBuilder: FormBuilder, private location: Location) {
    this.newEntryForm = this.formBuilder.group(
      {
        name: '',
        info: '',
        address: '',
        email: '',
        phone: ''
      }
    );
    this.displayWarning = false;
  }

  ngOnInit(): void {
  }

  onSubmit(entryData: any): void {
    if (this.entryDataNotEmpty(entryData)) {
      const entry: Entry = new Entry(
        IdAssignment.assignNewId(),
        entryData.name,
        entryData.info,
        entryData.address,
        entryData.email,
        entryData.phone
      );
      EntriesList.addNewEntry(entry);
      this.location.back();
    } else {
      this.displayWarning = true;
    }
  }

  entryDataNotEmpty(entryData: any): boolean {
    if (entryData.name.trim().length > 0 && entryData.info.trim().length > 0 &&
      entryData.address.trim().length > 0 && entryData.email.trim().length > 0
      && entryData.phone.trim().length > 0) {
      return true;
    }
    return false;
  }

}
