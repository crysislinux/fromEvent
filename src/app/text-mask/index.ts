import { NgModule } from '@angular/core';

import { TextMaskDirective } from './text-mask';

@NgModule({
  imports: [ ],
  declarations: [TextMaskDirective],
  exports: [TextMaskDirective]
})
export class TextMaskModule { }

export { TextMaskDirective };
