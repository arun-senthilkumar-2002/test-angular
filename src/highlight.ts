import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {

  constructor(private el:ElementRef,private render:Renderer2) { }
 @HostListener('mouseenter') OnMouseEnter(){
this.funcall('yellow');
 }
  @HostListener('mouseleave') OnMouseLeave(){
  this.funcall('white')
 }

funcall(data:string){
  this.render.setStyle(this.el.nativeElement,'backgroundColor',data)
}
}
