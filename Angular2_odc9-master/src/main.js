import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
//var AppModule = app.AppModule;

platformBrowserDynamic().bootstrapModule(AppModule);