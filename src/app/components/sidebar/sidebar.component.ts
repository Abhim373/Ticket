import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  isMenuOpen = true;
  contentMargin = 240;

  mouseOver(){
    this.isMenuOpen=true;
    this.contentMargin = 16;
  }
  mouseOut(){
      this.isMenuOpen=false;
      this.contentMargin = 4;
  }

  

}
