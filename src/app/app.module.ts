import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MineComponent } from './mine/mine.component';
import { MiningComponent } from './mining/mining.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LevelDisplayComponent } from './level-display/level-display.component';
import { MinesComponent } from './mines/mines.component';
import { DataService } from './shared/data.service';
import { FloatingNumberComponent } from './floating-number/floating-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    MineComponent,
    MiningComponent,
    LevelDisplayComponent,
    MinesComponent,
    FloatingNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
