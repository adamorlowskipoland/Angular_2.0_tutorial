//    remember that here we use @angular not ng like in previouse examples
import {Component, Inject} from '@angular/core';
import {QuoteService} from './quote.service';

//var Component = ng.core.Component;
//var Inject = ng.core.Inject;
//var QuoteService = app.QuoteService;



//    decorator
@Component({
    selector:'second',
    template:'<p><em>{{quote.line}} </em>{{quote.author}}</p>'
})

export class SecondComponent {
    constructor (@Inject(QuoteService)quoteService){
        quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
    }
}