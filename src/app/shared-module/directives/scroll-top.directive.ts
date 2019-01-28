import { Directive, Renderer2, ElementRef, Inject, HostBinding, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {
  private scrollThreshold = 150;
  @HostBinding('class') scrollTopBtn = 'scroll-top-btn';
  @HostListener('click') onclick() {
    window.scrollTo(0, 0);
  }
  @HostListener('document:scroll') onscroll(){
    let scrollPosition = window.scrollY || this.document.documentElement.scrollTop || this.document.document.body.scrollTop;

    if(scrollPosition > this.scrollThreshold) {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
    }
  }

  constructor(private renderer : Renderer2,
              @Inject(DOCUMENT) private document,
              private hostElement : ElementRef) { }

}
