import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMoreHorizDialogComponent } from './ticket-more-horiz-dialog.component';

describe('TicketMoreHorizDialogComponent', () => {
  let component: TicketMoreHorizDialogComponent;
  let fixture: ComponentFixture<TicketMoreHorizDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMoreHorizDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMoreHorizDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
