import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatSlideToggleModule } from '@angular/material';
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatSlideToggleModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
