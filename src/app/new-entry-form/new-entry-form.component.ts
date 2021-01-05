import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Entry } from '../entries/entry';
import { EntriesList } from '../entries-list';
import { IdAssignment } from '../id-assignment';

@Component({
  selector: 'app-new-entry-form',
  templateUrl: './new-entry-form.component.html',
  styleUrls: ['./new-entry-form.component.scss']
})
export class NewEntryFormComponent implements OnInit {

  newEntryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) {
    this.newEntryForm = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required]),
        info: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(entryData): void {
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
    }
  }

  entryDataNotEmpty(entryData: any): boolean {
    if (entryData.name.length > 0 && entryData.info.length > 0 &&
      entryData.address.length > 0 && entryData.email.length > 0
      && entryData.phone.length > 0) {
      return true;
    }
    return false;
  }

}
