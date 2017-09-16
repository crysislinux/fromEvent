import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class MessengerService implements OnDestroy {
  scrollEvent$: Observable<Event>;

  constructor(private zone: NgZone) { }

  setupScrollElement(ele: Element) {
    this.scrollEvent$ = Observable.fromEvent(ele, 'scroll');
  }

  ngOnDestroy() {
    console.log('destory service')
  }
}
