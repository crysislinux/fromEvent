// tslint:disable no-forward-ref
import { Directive, ElementRef, forwardRef, Input, Inject, NgModule, OnChanges, Provider, Renderer, SimpleChanges } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'


export const MASKEDINPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextMaskDirective),
  multi: true
}

@Directive({
  host: {
    '(input)': 'onInput($event.target.value)',
    '(blur)': '_onTouched()'
  },
  selector: '[asTextMask]',
  providers: [MASKEDINPUT_VALUE_ACCESSOR]
})
export class TextMaskDirective implements ControlValueAccessor {
  _onTouched = () => {}
  _onChange = (_: any) => {}

  writeValue(value: any) {

  }

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }

  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  onInput(value) {
    console.log('input value');
  }
}
