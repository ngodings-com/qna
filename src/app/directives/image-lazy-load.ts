import { Directive, ElementRef, Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
}) 
@Directive({ selector: 'img' })
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else {
      // fallback to IntersectionObserver
    }
  }
}