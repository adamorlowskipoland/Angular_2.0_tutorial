(function(){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule
    var BrowserModuleDynamic = ng.platformBrowserDynamic.platformBrowserDynamic
    
    
    
    var SecondComponent = Component({
//        meta dane
        selector: 'second',
        template: '<p>This is a text.</p>'
    })
    .Class({
        constructor : function(){}
    });
    
    
    var AppComponent = Component({
//        meta dane 
        selector: 'my-app', 
        template: '<h1>Angular 2.0 Hello World!!!</h1>' + 
                    '<second></second>'
    })
    .Class({
        constructor : function(){}
    });
    
    var AppModule = NgModule({
//        meta dane
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor : function(){}
    });
    
    BrowserModuleDynamic().bootstrapModule(AppModule);
    
})();