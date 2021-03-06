// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent, environment } from './app/';
// import { provideForms, disableDeprecatedForms } from '@angular/forms';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrap(AppComponent, [
//   disableDeprecatedForms(),
//   provideForms()
// ]).catch((err: any) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/index';

platformBrowserDynamic().bootstrapModule(AppModule);
