import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardIssueDialogComponent } from '../Dialog/card-issue-dialog/card-issue-dialog.component';
import { TicketMoreDialogComponent } from '../Dialog/ticket-more-dialog/ticket-more-dialog.component';

@Component({
  selector: 'app-ticket-container',
  templateUrl: './ticket-container.component.html',
  styleUrls: ['./ticket-container.component.scss']
})
export class TicketContainerComponent implements OnInit {

  today: number = Date.now();
  imgUrl:any='../../../assets/imgs/ticketImg.jpg';
  isOpenUser = false;
  isOpenMore=false;
  isOpenMoreHoriz=false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogCardIssue() {
    const dialogRef = this.dialog.open(CardIssueDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
