import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Entry } from '../entries/entry';
import { EntriesList } from '../entries-list';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-entry-form',
  templateUrl: './edit-entry-form.component.html',
  styleUrls: ['./edit-entry-form.component.scss']
})
export class EditEntryFormComponent implements OnInit {

  editEntryForm: FormGroup;
  id: number;
  entry: Entry;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
    this.editEntryForm = this.formBuilder.group(
      {
        name: '',
        address: '',
        email: '',
        phone: ''
      }
    );
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.entry = EntriesList.getEntryById(this.id);

    this.editEntryForm = this.formBuilder.group(
      {
        name: this.entry.name,
        address: this.entry.address,
        email: this.entry.email,
        phone: this.entry.phone
      }
    );
  }

  onSubmit(entryData): void {
    this.entry.name = entryData.name;
    this.entry.address = entryData.address;
    this.entry.email = entryData.email;
    this.entry.phone = entryData.phone;
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['entry-profile', this.entry.id]);
  }

  deleteEntry(id: number): void {
    EntriesList.deleteEntryById(id);
    this.router.navigate(['']);
  }

}
