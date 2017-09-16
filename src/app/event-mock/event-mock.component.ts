import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MdButton, Platform } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { MessengerService } from '../messenger';

@Component({
  selector: 'cf-event-mock',
  templateUrl: 'event-mock.component.html',
  styleUrls: ['event-mock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventMockComponent {
  something$: Observable<string>;
  constructor(private ms: MessengerService) {

  }

  ngOnInit() {
    this.something$ = this.ms.scrollEvent$
    .mapTo(1)
    .scan((acc, v) => acc + v)
    .map(count => `Something ${count}`)
  }
}
