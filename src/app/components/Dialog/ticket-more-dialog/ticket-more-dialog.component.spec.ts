import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMoreDialogComponent } from './ticket-more-dialog.component';

describe('TicketMoreDialogComponent', () => {
  let component: TicketMoreDialogComponent;
  let fixture: ComponentFixture<TicketMoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
