import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
   
  }

  @HostListener('mouseenter') enter(){
    this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'blue'
      );
  }

  @HostListener('mouseleave') leave(){
    this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'transparent'
      );
  }
}
