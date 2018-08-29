import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from './+store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.theme$ = this.store.pipe(select(fromStore.selectTheme));
  }

  setTheme(theme: string) {
    this.store.dispatch(new fromStore.SetThemeAction(theme));
  }
}
