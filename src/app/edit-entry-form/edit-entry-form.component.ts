import { Component, OnInit } from '@angular/core';
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
  displayWarning: boolean;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {

    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });
    this.entry = EntriesList.getEntryById(this.id);
    this.editEntryForm = this.formBuilder.group(
      {
        name: this.entry.name,
        info: this.entry.info,
        address: this.entry.address,
        email: this.entry.email,
        phone: this.entry.phone
      }
    );
    this.displayWarning = false;
  }

  ngOnInit(): void {
  }

  onSubmit(entryData: any): void {
    if (this.entryDataNotEmpty(entryData)) {
      this.entry.name = entryData.name;
      this.entry.info = entryData.info;
      this.entry.address = entryData.address;
      this.entry.email = entryData.email;
      this.entry.phone = entryData.phone;
      this.goBack();
    } else {
      this.displayWarning = true;
    }
  }

  goBack(): void {
    this.router.navigate(['entry-profile', this.entry.id]);
  }

  deleteEntry(id: number): void {
    EntriesList.deleteEntryById(id);
    this.router.navigate(['']);
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
