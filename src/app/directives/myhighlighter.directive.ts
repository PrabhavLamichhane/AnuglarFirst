import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyhighlighter]'
})
export class MyhighlighterDirective {

  @Input() color:string = "red";

  constructor(private testElement: ElementRef) {

  }

  ngOnInit(){
    this.testElement.nativeElement.style.backgroundColor = this.color;
  }

}
