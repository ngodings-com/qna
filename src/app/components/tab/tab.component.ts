import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SizeStandard } from '@models/size';
import { Tab } from '@models/tab';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent implements OnInit {
  @Input() size: SizeStandard = SizeStandard.none;
  @Input() activeIndex: number = 0;
  @Input() isBordered = false;
  @Input() isLifted = false;
  @Input() isBoxed = false;
  @Input() tabs: Tab[] = [];

  @Output() activeIndexChange = new EventEmitter<number>();

  sizeValue = '';

  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit(){
    if (this.size != SizeStandard.none) {
      this.sizeValue = SizeStandard[this.size];
    }
  }

  onCallback(tab: Tab) {
    this.activeIndex = tab.index;
    this.activeIndexChange.emit(this.activeIndex);
  }
}