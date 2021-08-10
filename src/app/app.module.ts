import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TicketContainerComponent } from './components/ticket-container/ticket-container.component';
import { TicketMoreDialogComponent } from './components/Dialog/ticket-more-dialog/ticket-more-dialog.component';
import { TicketMoreHorizDialogComponent } from './components/Dialog/ticket-more-horiz-dialog/ticket-more-horiz-dialog.component';
import { TicketUserDialogComponent } from './components/Dialog/ticket-user-dialog/ticket-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    TicketContainerComponent,
    TicketMoreDialogComponent,
    TicketMoreHorizDialogComponent,
    TicketUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
