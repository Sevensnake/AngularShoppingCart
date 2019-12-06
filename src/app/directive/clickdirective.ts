import { Directive, ElementRef, Renderer2, HostListener, EventEmitter, Output } from '@angular/core';
 
@Directive({
  selector: '[clickImage]'
})
export class MoreInfoDirective {
    @Output('clickImage') clickOutside: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (clickedInside) {
      this.clickOutside.emit(null);
    }
  }
 /*  @HostListener('mouseenter') onmouseenter() {
  this.renderer.addClass(this.el.nativeElement, 'highlight')
  }
  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight')
  } */
}
