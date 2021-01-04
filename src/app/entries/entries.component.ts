import { Component, OnInit } from '@angular/core';
import { Entry } from './entry';
import { EntriesList } from '../entries-list';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];

  constructor() {
    this.entries = EntriesList.getEntries();
  }

  ngOnInit(): void {
  }

  // viewContact(entryId: number): void {

  // }



}
