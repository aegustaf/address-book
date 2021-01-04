import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Entry } from '../entries/entry';
import { EntriesList } from '../entries-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry-form',
  templateUrl: './edit-entry-form.component.html',
  styleUrls: ['./edit-entry-form.component.scss']
})
export class EditEntryFormComponent implements OnInit {

  id: number;
  entry: Entry;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.entry = EntriesList.getEntryById(this.id);
  }

  onSubmit(): void {
    console.log('Submit');
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  deleteEntry(id: number): void {
    const entryToDelete = EntriesList.deleteEntryById(id);
  }

}
