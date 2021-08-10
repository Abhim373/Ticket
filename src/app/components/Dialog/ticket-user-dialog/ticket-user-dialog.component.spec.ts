import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketUserDialogComponent } from './ticket-user-dialog.component';

describe('TicketUserDialogComponent', () => {
  let component: TicketUserDialogComponent;
  let fixture: ComponentFixture<TicketUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
