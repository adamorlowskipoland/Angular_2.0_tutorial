import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {QuoteService} from './quote.service';
import {SecondComponent} from './second.component';
import {AppComponent} from './app.component';

//    these are the same as the ones up ^
//var NgModule = ng.core.NgModule;
//var BrowserModule = ng.platformBrowser.BrowserModule;
//var QuoteService = app.QuoteService;
//var SecondComponent = app.SecondComponent;
//var AppComponent = app.AppComponent;


//    decorator
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, SecondComponent], 
    providers:[
        {provide: QuoteService, useClass: QuoteService}
        ],  
    bootstrap: [AppComponent]
})

export class AppModule {

}