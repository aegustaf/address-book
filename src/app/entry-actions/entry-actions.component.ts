import { Component, OnInit } from '@angular/core';
import { Entry } from '../entries/entry';
import { ActivatedRoute, Router } from '@angular/router';
import { EntriesList } from '../entries/entries-list';

@Component({
  selector: 'app-entry-actions',
  templateUrl: './entry-actions.component.html',
  styleUrls: ['./entry-actions.component.scss']
})
export class EntryActionsComponent implements OnInit {

  id: number;
  entry: Entry;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.entry = EntriesList.getEntryById(this.id);
  }

  goBack(): void {
    this.router.navigate(['entry-profile', this.entry.id]);
  }

}
