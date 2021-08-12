import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  // COMMENTED ---> DIRECTIVE PROPERTIES W/OUT input-SETTERS, ALSO ON SETSTYLE() & SETTEXT()
  // @Input() text: string = 'This field is required';
  // @Input() color: string = 'darkred';

  private _text: string = 'This field is required'
  @Input() set text(value: string) {
    this.setText()
  }
  private _color: string = 'darkred'
  @Input() set color(value: string) {
    this._color = value
    this.setStyle()
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setClass()
    this.setStyle()
    this.setText()
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add("form-text")
  }

  setStyle(): void {
    // this.htmlElement.nativeElement.style.color = this.color
    this.htmlElement.nativeElement.style.color = this._color
  }

  setText(): void {
    // this.htmlElement.nativeElement.innerText = this.text
    this.htmlElement.nativeElement.innerText = this._text
  }

}
