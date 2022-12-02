import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToTopComponent {
  isShow: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let me = this;
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      me.isShow = true;
    } else {
      me.isShow = false;
    }
  }
  constructor(public appData: AppData) {

  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
