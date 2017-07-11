import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [HttpModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  providers: []
})
export class CoreModule {

}

