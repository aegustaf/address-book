import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Entry } from '../entries/entry';
import { ENTRIES_LIST } from '../entries-list';

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
        name: '',
        address: '',
        email: '',
        phone: ''
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(entryData): void {
    let entry: Entry = new Entry(entryData.name, entryData.address, entryData.email, entryData.phone);
    ENTRIES_LIST.push(new Entry(entryData.name, entryData.address, entryData.email, entryData.phone));
    this.location.back();
  }

}
