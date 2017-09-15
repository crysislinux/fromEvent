import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cf-test-page',
  templateUrl: 'test-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private sub;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('a'),
    })

    this.sub = this.form.valueChanges.subscribe(value => {
      console.log('value changes', value);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
