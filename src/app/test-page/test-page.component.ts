import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MdButton, Platform } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { MessengerService } from '../messenger';

@Component({
  selector: 'cf-test-page',
  templateUrl: 'test-page.component.html',
  styleUrls: ['test-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent {
  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;
  private counter = 0;
  get something() {
    console.log('get called');
    return `something ${this.counter}`;
  }

  constructor(private ms: MessengerService, private er: ElementRef) {

  }

  ngOnInit() {
    this.ms.setupScrollElement(this.er.nativeElement);
  }

  test() {
    this.counter ++;
    console.log('test')
  }

}
