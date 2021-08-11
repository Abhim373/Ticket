import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollingModule} from '@angular/cdk/scrolling';



const material=[
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatMenuModule,
  OverlayModule,
  MatSlideToggleModule,
  MatBadgeModule,
  ScrollingModule,
  MatTabsModule
]

@NgModule({
  imports: [material ],
  exports:[material]
})
export class MaterialsModule { }
