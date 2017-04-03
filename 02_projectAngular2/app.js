(function(){
    var AppComponent = ng.core.Component({
    
//        meta dane 
        selector: 'my-app', 
        template: '<h1>Angular 2.0 Hello World!!!</h2>'
    })
    .Class({
        constructor : function(){}
    });
    
    var AppModule = ng.core.NgModule({
//        meta dane
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor : function(){}
    })
    
})();