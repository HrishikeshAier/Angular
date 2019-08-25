import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailuer]'
})

export class CompFailuerDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.color = 'black';
  }
}

