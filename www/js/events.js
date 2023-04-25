document.addEventListener("init", function (event) {
    var page = event.target;
    if(typeof page.data !== 'undefined'){
        window.pageData = page.data;
    }
    // Pagina de nueva cotización
    switch (page.id) {
        //Página de nueva cotizacion
        case 'estado':
            $('#nombre-estado').html(page.data.nombreEstado);
            break;
        default:
            console.log('No data available for '+page.id);
            break;
    }
});
