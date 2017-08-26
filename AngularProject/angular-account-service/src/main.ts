import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';   // 1 <<== Comment AppModule
import { HomeModule } from './app/home/home.module';  // 3 <<== Import newly created home module.
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule);  // 2 <<== Comment AppModule as bootstrapModule
platformBrowserDynamic().bootstrapModule(HomeModule);   // 4 <<== Add HomeModule for bootstrapModule