import { Component, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '@providers/breadcrumb.service';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent {
  breadcrumbs: any[] = [];

  isOneLink = false;
  isTwoLink = false;
  isThreeLink = false;
  constructor(public appData: AppData, public appHelper: AppHelper, private readonly breadcrumbService: BreadcrumbService) {
    breadcrumbService.breadcrumbs$.subscribe((item) => {
      this.breadcrumbs = item;
    });
  }
}
