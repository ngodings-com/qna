import { Component, ViewEncapsulation } from '@angular/core';
import { ColorState } from '@models/color';
import { MessageService } from 'primeng/api';
import { AppData } from './app.data';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ngodings',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MessageService,
  ]
})
export class AppComponent {
  colorState = ColorState;
  constructor(
    public appData: AppData, 
    public messageService: MessageService, 
    private meta: Meta, 
    private title: Title,) {
    this.appData.onToastChanges.subscribe((item) => {
      this.showToast();
    });

    this.setTitle();
    this.setTag();
    this.appData.onTitleChanges.subscribe((item) => {
      this.setTitle();
     });

    this.appData.onMetaChanges.subscribe((item) => {
      this.updateTag();
     });
  }

  setTitle() {
    this.title.setTitle(this.appData.title);
  }

  updateTag() {
    this.meta.updateTag({ name: this.appData.meta.type, content: this.appData.meta.name, },);
  }

  setTag() {
    this.meta.addTag({ name: 'keywords', content: 'Ngodings - Angular Multipurpose Template', },);
    this.meta.addTag({ name: 'description', content: 'Ngodings - Angular Multipurpose Template', },);
    this.meta.addTag({ name: 'robots', content: 'angular, templates, theme', },);
    this.meta.addTag({ name: 'author', content: 'Ngodings', },);
  }

  showToast() {
      this.messageService.add({severity:ColorState[this.appData.toast.severity], summary:this.appData.toast.title, detail: this.appData.toast.desc});
  }
}
