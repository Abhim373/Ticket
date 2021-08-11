import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIssueDialogComponent } from './card-issue-dialog.component';

describe('CardIssueDialogComponent', () => {
  let component: CardIssueDialogComponent;
  let fixture: ComponentFixture<CardIssueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIssueDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIssueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
