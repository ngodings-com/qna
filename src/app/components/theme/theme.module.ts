import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeComponent } from './theme.component';

@NgModule({
  declarations: [
    ThemeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThemeComponent,
  ],
  providers: [],
})
export class ThemeModule { }
