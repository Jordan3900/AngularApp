import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {

  constructor() { }

  @HostBinding('class.blur')
  private hostSelected = true;

  @HostListener('mouseover')
  private onMouseOver() {
    this.hostSelected = false;
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.hostSelected = true;
  }
}
