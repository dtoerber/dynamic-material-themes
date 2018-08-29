import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="{'dark-theme': isDarkTheme | async }">
      <div class="mat-app-background">
        <app-toolbar></app-toolbar>
        <div class="content mat-typography"></div>
        <app-tile></app-tile>
        <app-dashboard></app-dashboard>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarktheme;
  }
}
