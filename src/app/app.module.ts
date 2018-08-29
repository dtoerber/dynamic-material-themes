import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, DashboardComponent, TileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
