import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(  private render: Renderer2,
    private el: ElementRef) {  
  }  

  ngAfterViewInit(): void {  
    this.render.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }    

}
