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
  chosenSort: string;
  sortOldest: boolean;
  sortNewest: boolean;
  sortAlphabetical: boolean;

  entriesNewest: Entry[];
  entriesAlphabetical: Entry[];

  constructor() {
    this.entries = EntriesList.getEntries();

    this.sortOldest = true;
    this.sortNewest = false;
    this.sortAlphabetical = false;
    this.chosenSort = 'sortOldest';

    this.entriesNewest = EntriesList.getEntriesOrderedByNewest();
    this.entriesAlphabetical = EntriesList.getEntriesOrderedAlphabetically();
  }

  ngOnInit(): void {
  }

  sortEntries(): void {
    switch (this.chosenSort) {
      case 'sortOldest':
          this.sortOldest = true;
          this.sortNewest = false;
          this.sortAlphabetical = false;
          break;

      case 'sortNewest':
          this.sortOldest = false;
          this.sortNewest = true;
          this.sortAlphabetical = false;
          break;

      case 'sortAlphabetical':
          this.sortOldest = false;
          this.sortNewest = false;
          this.sortAlphabetical = true;
          break;
    }
  }

}
