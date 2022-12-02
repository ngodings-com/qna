import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@components/button/button.module';

import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
  {
    path: '',
    component: NotfoundComponent,
    data: { breadcrumb: '404' },
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    NotfoundComponent,
  ],
  providers: [],
})
export class NotfoundModule { }
