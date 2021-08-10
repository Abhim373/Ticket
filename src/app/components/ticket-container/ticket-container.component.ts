import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketMoreDialogComponent } from '../Dialog/ticket-more-dialog/ticket-more-dialog.component';

@Component({
  selector: 'app-ticket-container',
  templateUrl: './ticket-container.component.html',
  styleUrls: ['./ticket-container.component.scss']
})
export class TicketContainerComponent implements OnInit {

  today: number = Date.now();
  imgUrl:any='../../../assets/imgs/ticketImg.jpg';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(TicketMoreDialogComponent);
  }
  

}
