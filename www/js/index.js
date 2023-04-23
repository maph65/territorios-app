// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

}

window.fn = {};

window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
    /*if(page == 'cotizaciones.html' || page=='pedidos.html'){
        if(page == 'cotizaciones.html'
            && document.querySelector('#gilsaNavigator').topPage.id == 'cotizaciones-landing'){
            console.log('cerrar Menu');
            menu.close.bind(menu);
        }else if(page == 'pedidos.html'
            && document.querySelector('#gilsaNavigator').topPage.id == 'pedidos-landing'){
            console.log('cerrar Menu');
            menu.close.bind(menu);
        }else{
            document.querySelector('#gilsaNavigator')
                .resetToPage(page).then(menu.close.bind(menu));
        }
    }else{
        content.load(page)
            .then(menu.close.bind(menu));
    }*/
};

window.fn.popBtn = function(){
    //console.log('pop ejecutado');
    document.querySelector('#territoriosNavigator')
        .popPage();
}