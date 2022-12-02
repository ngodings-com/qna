import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-pages-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotfoundComponent implements OnInit, AfterViewInit {

  constructor(public appHelper: AppHelper, public appData: AppData) {
  }

  ngOnInit() {
    const page = 'Notfound';
    this.appData.title = "Ngodings | " + page;
    this.appData.onTitleChanges.next(true);

    this.appData.meta = {
      type: 'keywords',
      name: page,
    }
    this.appData.onMetaChanges.next(true);
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
        this.appData.isFullPageValue = true;
      }, 250);
  }
}
