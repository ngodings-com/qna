import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkeletonComponent implements OnInit {
  @Input() isCircle = false;
  @Input() isSquare = false;
  @Input() isRounded = false;
  @Input() width = "40px";
  @Input() height = "40px";


  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit(){
  }
}