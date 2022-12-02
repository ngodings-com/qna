import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@components/button/button.module';

import { QNAComponent } from './qna.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TabModule } from '@components/tab/tab.module';
import { AccordionModule } from '@components/accordion/accordion.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { qnaKey, reducer } from './state/qna.reducer';
import { QNAEffects } from './state/qna.effect';
import { QNAService } from './qna.service.ts';

const routes: Routes = [
  {
    path: '',
    component: QNAComponent,
    data: { breadcrumb: 'QnA' },
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    QNAComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    TabModule,
    AccordionModule,
    StoreModule.forFeature(qnaKey, reducer),
    EffectsModule.forFeature([QNAEffects]),
  ],
  exports: [
    QNAComponent,
  ],
  providers: [
    QNAService,
  ],
})
export class QNAModule { }
