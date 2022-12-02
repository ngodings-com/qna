import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    BreadcrumbComponent,
  ],
  providers: [],
})
export class BreadcrumbModule { }
