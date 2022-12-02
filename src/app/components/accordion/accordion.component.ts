import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '@models/tab';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit {
  @Input() activeIndex: number = 0;
  @Input() datas: any[] = [];
  @Output() activeIndexChange = new EventEmitter<number>();

  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit() {
  }
}