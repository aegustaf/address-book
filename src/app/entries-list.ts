import { Entry } from './entries/entry';

export class EntriesList {
  private static entriesList: Entry[] = [
    new Entry(0, 'Zariana Grande', 'Singer', '123 State St', 'ag@aol.com', '123-123-1234'),
    new Entry(1, 'Heidi Klum', 'Model and TV Host', '92 MLK Blvd', 'hk@aol.com', '123-123-1234'),
    new Entry(2, 'Miley Cyrus', 'Singer', '456 Nebraska Ave', 'mc@aol.com', '123-123-1234')
  ];

  static getEntries(): Entry[] {
    return this.entriesList;
  }

  static getEntriesOrderedByNewest(): Entry[] {
    return this.entriesList.slice().sort((a, b) => b.id - a.id);
  }

  static getEntriesOrderedAlphabetically(): Entry[] {
    return this.entriesList.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  static getEntryById(id: number): Entry {
    for (const entry of this.entriesList) {
      if (entry.id === id)
      {
        return entry;
      }
    }
    return undefined;
  }
  static addNewEntry(entry: Entry): void {
    this.entriesList.push(entry);
  }

  static deleteEntryById(id: number): void {
    for (let i = 0; i < this.entriesList.length; i++) {
      if (this.entriesList[i].id === id) {
        this.entriesList.splice(i, 1);
      }
    }
  }
}
