(function (app){
    
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var QuoteService = app.QuoteService;
    var SecondComponent = app.SecondComponent;
    var AppComponent = app.AppComponent;
    
    app.AppModule = NgModule({
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
    
})(window.app || (window.app = {}));