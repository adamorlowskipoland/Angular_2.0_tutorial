(function (){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule
    var BrowserModuleDynamic = ng.platformBrowserDynamic.platformBrowserDynamic
    var Class = ng.core.Class;
    
    
    
    var QuoteService = Class({
        constructor : function QuoteService(){
            this.quotes = quotes;
        },
        
        getRandomQuote : function() {
            var randomIndex = Math.floor(Math.random() * quotes.length)
            return this.quotes[randomIndex];
        },
        generateRandomQuote : function(delay, callback) {
            var self = this;
            callback(this.getRandomQuote());
            setInterval(function(){
                callback(self.getRandomQuote())
            }, delay);
        }
    })
    
    var TestService = Class({
        constructor: function(){},
        getRandomQuote: function() {
            return {
                "line" : 'Test quote',
                "author" : 'Test author'
            };
        }
    });
    
    var SecondComponent = Component({
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
    
    
    var AppComponent = Component({
//        meta dane 
        selector: 'my-app', 
        template: `<h1>Angular 2.0 Hello World!!!</h1>
                    <second></second>
                    <second></second>`
    })
    .Class({
        constructor : function AppComponent(){}
    });
    
    var AppModule = NgModule({
//        meta dane
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [
            {provide : QuoteService, useClass: QuoteService}
        ],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor : function(){}
    });
    
    BrowserModuleDynamic().bootstrapModule(AppModule);
    
    var quotes = [
        {
            "line" : "Walking on water and developing software from a specification are easy if both are frozen.",
            "author" : "Edward V Berard"
        },
        {
            "line" : "It always takes longer hen you expect, even when you take into account Hofstadter's Law.",
            "author" : "Hofstadter's Law"
        },
        {
            "line" : "Measuring programing progress by lines of code is like measuring aircraft building progress by weight.",
            "author" : "Bill Gates"
        },
        {
            "line" : "If debugging is the process of removing software bugs, then programing must be the process of putting them in.",
            "author" : "Edgar Dijkstra"
        },
        {
            "line" : "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
            "author" : "Tom Cargill"
        }
    ]
    
})();