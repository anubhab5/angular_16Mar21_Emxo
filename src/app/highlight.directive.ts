import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[testHighlight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef) { // it will give access/ hold of the element on which directive has been added.
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.changeColor("red");
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeColor("black");
  }

  private changeColor(color: string) {
    this.elRef.nativeElement.style.color = color;
  }


}
