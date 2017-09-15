import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { CoreModule } from '@app/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page';

import { TextMaskModule } from './text-mask';
import { WordCaseModule } from './word-case';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    CoreModule,
    MaterialModule,
    TextMaskModule,
    WordCaseModule,
  ],
  declarations: [
    AppComponent,
    TestPageComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [

  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    if (!store || !store.rootState) return;

    // restore state
    if (store.rootState) {
      // this._store.dispatch({
      //   type: 'SET_ROOT_STATE',
      //   payload: store.rootState
      // });
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }

     // change detection
    setTimeout(() => {
      this.appRef.tick();
    }, 1000);
    delete store.rootState;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    // this._store.take(1).subscribe(s => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
