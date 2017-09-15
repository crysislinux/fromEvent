import { NgModule } from '@angular/core';

import { WordCaseDirective } from './word-case';

@NgModule({
  imports: [ ],
  declarations: [WordCaseDirective],
  exports: [WordCaseDirective]
})
export class WordCaseModule { }

export { WordCaseDirective };
