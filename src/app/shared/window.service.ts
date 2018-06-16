import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

const getWindowSize = () => ({ width: window.innerWidth, height: window.innerHeight });
const getScrollOffset = () => ({ left: document.body.scrollLeft, top: (document.body.scrollTop || document.documentElement.scrollTop) });

@Injectable()
export class WindowService {
  width: Observable<number>;
  height: Observable<number>;
  scrollTop: Observable<number>;
  scrollLeft: Observable<number>;

  constructor() {
    const windowSize = new BehaviorSubject(getWindowSize());
    this.width = (windowSize.pluck('width') as Observable<number>).distinctUntilChanged();
    this.height = (windowSize.pluck('height') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(getWindowSize)
      .subscribe(windowSize);

    const scrollOffset = new BehaviorSubject(getScrollOffset());
    this.scrollLeft = (scrollOffset.pluck('left') as Observable<number>).distinctUntilChanged();
    this.scrollTop = (scrollOffset.pluck('top') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(document, 'scroll')
      .map(getScrollOffset)
      .subscribe(scrollOffset);
  }

}
