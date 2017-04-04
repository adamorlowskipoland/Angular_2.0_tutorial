(function (app){
    
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;
    
    app.SecondComponent = Component({
//        meta dane
        selector: 'second',
        template: '<p><em>{{quote.line}} </em>{{quote.author}}</p>'
    })
    .Class({
        constructor : [QuoteService, function SecondComponent(quoteService){
            var self = this;
            quoteService.generateRandomQuote(15000, function(quote) {
                self.quote = quote;
            });
        }]
    });

    
})(window.app || (window.app = {}));