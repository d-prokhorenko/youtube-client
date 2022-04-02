import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCheckDate]',
})
export class CheckDateDirective implements AfterViewInit {
  @Input('appCheckDate') date: string = '';

  class: string = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.checkDate();
    this.renderer.addClass(this.el.nativeElement, this.class);
  }

  checkDate(): void {
    const currentDate = Date.now();
    const videoDate = new Date(this.date).getTime();
    const interval = currentDate - videoDate;
    const seconds = interval / 1000;
    const secondsInOneDay = 86400;
    const months = Math.floor(seconds / secondsInOneDay / 30);
    const days = Math.floor(seconds / secondsInOneDay);

    this.class =
      days < 7
        ? 'search-item--blue'
        : months <= 1
        ? 'search-item--green'
        : 'search-item--red';
  }
}
