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
    console.log('Cargando ' + page);
    //var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    if(page !== document.querySelector('#territoriosNavigator').topPage.id + '.html'){
        document.querySelector('#territoriosNavigator')
            .resetToPage(page).then(menu.close.bind(menu));
    }else{
        menu.close();
    }

    /*content.load(page)
        .then(menu.close.bind(menu));*/
};

window.fn.popBtn = function(){
    //console.log('pop ejecutado');
    document.querySelector('#territoriosNavigator')
        .popPage();
}

window.fn.goConcenos = function(){
    document.querySelector('#territoriosNavigator')
        .pushPage('conocenos.html',{});
}

window.fn.goSearchResults = function(){
    document.querySelector('#territoriosNavigator')
        .pushPage('resultado-busqueda.html',{  });
}

window.fn.goAgradecimientos = function(){
    document.querySelector('#territoriosNavigator')
        .pushPage('agradecimientos.html',{});
}

window.fn.goLeerMas = function(){
    document.querySelector('#territoriosNavigator')
        .pushPage('leer-mas.html',{});
}

window.fn.goEquipo = function(){
    document.querySelector('#territoriosNavigator')
        .pushPage('equipo.html',{});
}
window.fn.goMap = function(){
    document.querySelector('#territoriosNavigator')
        .popPage({times:2});
}
window.fn.leerMasNext = function() {
    var carousel = document.getElementById('carousel-leer-mas');
    carousel.next();
};

window.fn.equipoNext = function() {
    var carousel = document.getElementById('carousel-equipo');
    carousel.next();
};