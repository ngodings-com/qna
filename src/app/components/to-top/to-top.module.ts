import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToTopComponent } from './to-top.component';

@NgModule({
  declarations: [
    ToTopComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToTopComponent,
  ],
  providers: [],
})
export class ToTopModule { }
