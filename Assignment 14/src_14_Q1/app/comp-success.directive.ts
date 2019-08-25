import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})

export class CompSuccessDirective {

  constructor(private ele:ElementRef ) { }

  @HostListener('mouseover') onMouseOver()
  {
    this.ele.nativeElement.style.color = 'green';
  }
  @HostListener('mouseout') onMouseOut()
  {
    this.ele.nativeElement.style.color = 'black';
  }
}

