import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el:ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("black");
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // constructor() { }

}
function brown(brown: any) {
  throw new Error('Function not implemented.');
}

