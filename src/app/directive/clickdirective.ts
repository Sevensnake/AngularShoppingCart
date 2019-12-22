import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
 
@Directive({
  selector: '[clickImage]'
})
export class MoreInfoDirective {
    @Output('clickImage') clickImage: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) {
  }
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (clickedInside) {
      this.clickImage.emit(null);
    } 

  }

}
