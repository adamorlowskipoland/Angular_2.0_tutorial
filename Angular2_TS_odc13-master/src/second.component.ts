import {Component} from '@angular/core';
import {Quote} from './quote.model';
import {QuoteService} from './quote.service';

@Component({
  selector: 'second',
  template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
})
export class SecondComponent {

//    giving type
//  quote: any;
//    or just 
//    quote;
//    beacause it is 'any' in default

//    quote: Quote; means it is now type Quote, imported at the top
    quote: Quote;

//          quoteService is QuoteService type
  constructor( quoteService: QuoteService) {
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }
}