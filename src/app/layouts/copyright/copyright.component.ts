import { Component, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CopyrightComponent {
  constructor(public appData: AppData) {

  }
}
