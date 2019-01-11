
(function(appRef){
document.addEventListener('DOMContentLoaded',() => {
    if(appRef){
    console.log('appRef.init');
    appRef.init();
    console.log('appRef.plugins');
    appRef.initPlugins();
    }  
})
})(APP);