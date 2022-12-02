import { Component, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

  constructor(public appData: AppData, public appHelper: AppHelper) {

  }
}
