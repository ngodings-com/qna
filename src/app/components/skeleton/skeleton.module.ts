import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkeletonModule as pSkeleton } from 'primeng/skeleton';

import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    pSkeleton,
  ],
  exports: [
    SkeletonComponent,
  ],
  providers: [],
})
export class SkeletonModule { }
