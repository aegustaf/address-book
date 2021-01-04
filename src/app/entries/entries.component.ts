import { Component, OnInit } from '@angular/core';
import { Entry } from './entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];

  constructor() {
    this.entries = [
      new Entry('Amanda Gustafson', '123 State St', 'ag@aol.com', '123-123-1234'),
      new Entry('Heidi Klum', '92 MLK Blvd', 'hk@aol.com', '123-123-1234'),
      new Entry('Miley Cyrus', '456 Nebraska Ave', 'mc@aol.com', '123-123-1234')
    ];
  }

  ngOnInit(): void {
  }



}
