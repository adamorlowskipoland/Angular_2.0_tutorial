(function (app){
    var BrowserModuleDynamic = ng.platformBrowserDynamic.platformBrowserDynamic
    var AppModule = app.AppModule;
    
    BrowserModuleDynamic().bootstrapModule(AppModule);

    
})(window.app || (window.app = {}));