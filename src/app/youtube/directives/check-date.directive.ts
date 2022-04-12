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

  color: 'blue' | 'green' | 'red' = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.checkDate();
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.color);
  }

  checkDate(): void {
    if (this.date) {
      const currentDate = Date.now();
      const videoDate = new Date(this.date).getTime();
      const interval = currentDate - videoDate;
      const seconds = interval / 1000;
      const secondsInOneDay = 86400;
      const months = Math.floor(seconds / secondsInOneDay / 30);
      const days = Math.floor(seconds / secondsInOneDay);

      this.color = days < 7 ? 'blue' : months <= 1 ? 'green' : 'red';
    }
  }
}
