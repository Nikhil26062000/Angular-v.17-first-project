import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') defaultColor:string = 'yellow'
  @Input() hoverColor:string = 'blue'
  @HostBinding('style.backgroundColor') bg:string = this.defaultColor
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
   this.bg = this.defaultColor
  }



  @HostListener('mouseenter') enter(){
   
      this.bg=this.defaultColor
  }

  @HostListener('mouseleave') leave(){
    
      this.bg=this.hoverColor
  }
}
