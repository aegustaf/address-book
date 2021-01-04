import { Component, OnInit } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES_LIST } from '../entries-list';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];

  constructor() {
    this.entries = ENTRIES_LIST;
  }

  ngOnInit(): void {
  }

  // viewContact(entryId: number): void {

  // }



}
