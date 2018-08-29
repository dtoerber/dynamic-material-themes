import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromStore from '../+store';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
  constructor(private store: Store<fromStore.State>) {}

  setTheme(theme: string) {
    this.store.dispatch(new fromStore.SetThemeAction(theme));
  }
}
