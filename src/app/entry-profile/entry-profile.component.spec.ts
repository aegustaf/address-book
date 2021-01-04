import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryProfileComponent } from './entry-profile.component';

describe('EntryProfileComponent', () => {
  let component: EntryProfileComponent;
  let fixture: ComponentFixture<EntryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
