// tslint:disable no-forward-ref
import { Directive, ElementRef, forwardRef, Input, OnChanges, Provider, Renderer2, SimpleChanges } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'


export const MASKEDINPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WordCaseDirective),
  multi: true
}

// TODO
// 1. implement OnChanges for dynamic change cfWordCase input value
@Directive({
  host: {
    '(input)': 'onInput($event.target.value)',
    '(blur)': '_onTouched()'
  },
  selector: '[cfWordCase]',
  providers: [MASKEDINPUT_VALUE_ACCESSOR]
})
export class WordCaseDirective implements ControlValueAccessor {
  @Input() cfWordCase: string;

  _onTouched = () => {}
  _onChange = (_: any) => {}

  constructor(private er: ElementRef, private renderer: Renderer2) { }

  writeValue(value: any) {
    if (typeof value !== 'string') {
      this.setValue('')
      return;
    }
    this.setValue(value);
  }

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }

  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.er.nativeElement, 'disabled', isDisabled)
  }

  onInput(value: string) {
    const tranformed = this.transformCase(value);
    if (tranformed !== value) {
      this.setValue(tranformed);
    }
    this._onChange(tranformed);
  }

  private setValue(value: string) {
    this.renderer.setProperty(this.er.nativeElement, 'value', value);
  }

  private transformCase(value: string): string {
    switch (this.cfWordCase) {
      case 'upper': {
        return value.toUpperCase();
      }
      case 'ignore': {
        return value;
      }
      default: {
        return value.toLowerCase();
      }
    }
  }
}
