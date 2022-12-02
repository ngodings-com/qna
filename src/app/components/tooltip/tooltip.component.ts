import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlignStandard } from '@models/align';
import { ColorStandard } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent implements OnInit {
  @Input() color: ColorStandard = ColorStandard.none;
  @Input() size: SizeStandard = SizeStandard.none;
  @Input() align: AlignStandard = AlignStandard.left;
  @Input() tooltip: string = '';
  @Input() isOpen = false;

  @Output() callback = new EventEmitter<boolean>();

  colorValue = '';
  alignValue = '';
  sizeValue = '';

  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit(){
    if (this.color != ColorStandard.none) {
      this.colorValue = ColorStandard[this.color];
    }
    this.alignValue = AlignStandard[this.align];
    if (this.size != SizeStandard.none) {
      this.sizeValue = SizeStandard[this.size];
    }
  }

  onCallback() {
    this.callback.emit(true);
  }
}