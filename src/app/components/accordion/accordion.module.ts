import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { AccordionModule as pAM } from 'primeng/accordion';

@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    pAM,
  ],
  exports: [
    AccordionComponent,
  ],
  providers: [],
})
export class AccordionModule { }
