import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit{

  constructor(private element:ElementRef) {

   }

   ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }

  @Input() color:string;

  @HostListener("click")
  onClick(){
    alert("Giriş başarılı...")
  }

  @HostBinding("style.color")
  writingColor:string = "red";

}
