import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../entries/entry';
import { EntriesList } from '../entries-list';


@Component({
  selector: 'app-entry-profile',
  templateUrl: './entry-profile.component.html',
  styleUrls: ['./entry-profile.component.scss']
})
export class EntryProfileComponent implements OnInit {

  id: number;
  entry: Entry;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.entry = EntriesList.getEntryById(this.id);
  }

}
