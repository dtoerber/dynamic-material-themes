import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../+store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  theme$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {}

  setTheme(theme: string) {
    this.store.dispatch(new fromStore.SetThemeAction(theme));
  }
}
