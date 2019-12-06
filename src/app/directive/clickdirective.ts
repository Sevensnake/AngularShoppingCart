import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
 
@Directive({
  selector: '[clickImage]'
})
export class MoreInfoDirective {
    @Output('clickImage') clickImage: EventEmitter<any> = new EventEmitter();
    @Output('resizeImage') resizeImage: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) {
  }
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (clickedInside) {
      this.clickImage.emit(null);
    } 

  }
 /*  @HostListener('mouseenter') onmouseenter() {
  this.renderer.addClass(this.el.nativeElement, 'highlight')
  }
  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight')
  } */
}
