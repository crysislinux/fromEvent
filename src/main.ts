import './polyfills';
import './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './app/app.module';

import '!style-loader!css-loader!sass-loader!./material-theme.scss';

if (process.env.ENV === 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

// boot on document ready
bootloader(main);
