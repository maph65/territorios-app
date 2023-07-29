document.addEventListener("init", function (event) {
    var page = event.target;
    if(typeof page.data !== 'undefined'){
        window.pageData = page.data;
    }
    // Pagina de nueva cotización
    switch (page.id) {
        //Página de nueva cotizacion
        case 'estado':
            $('#estado-container').css('display','none');
            $('#estado-loader').css('display','block');
            $('#nombre-estado').html(page.data.nombreEstado);
            console.log(page.data.codigo);
            $.get({
                url: window.baseUrlApi + 'api/v1/get-locaciones/' + page.data.codigo ,
                success:function(result){
                    console.log(result);
                    window.locacionesInfo = [];
                    if(result.data.length > 0){
                        let htmlSitios = '';
                        for(let i = 0; i < result.data.length; i++){
                            window.locacionesInfo[i] = result.data[i];
                            let sitio = new sitiosHelper(result.data[i]);
                            htmlSitios += sitio.getCardHtml();
                            $('#listado-sitios').html(htmlSitios);
                        }
                    }
                }
            }).fail(function(){
                $('#listado-sitios').html('<p>Ocurrió un error al cargar la información. Intente de nuevo más tarde.</p>');
            }).always(function(){
                $('#estado-container').css('display','block');
                $('#estado-loader').css('display','none');
            });
            break;

        case 'detalle-sitio':
            let idArray = page.data.idArray;
            if(window.locacionesInfo && window.locacionesInfo[idArray]){
                let sitio = new sitiosHelper(window.locacionesInfo[idArray]);
                let contentSitio = sitio.getContenidoSitio().replace(/\n/g,' <br>');
                console.log(sitio);
                $('#slider-sitio').html(sitio.getSliderHtml());
                $('#nombre-sitio').html(sitio.getNombreSitio());
                $('#direccion-sitio').html(sitio.getUbicacionSitio());
                $('#html-content-sitio').html(contentSitio);
                $('#nombre-autor').html(sitio.getNombreAutor());
            }else{
                alert('No se encontró la información del sitio. Intentalo de nuevo más tarde.');
                window.fn.goMap();
            }
            break;

        case 'autor':
            if(typeof window.locacionesInfo !== 'undefined' && typeof(window.locacionesInfo[window.currentSiteId].CtAutor !== 'undefined')){
                let autor = window.locacionesInfo[window.currentSiteId].CtAutor;
                console.log(autor);
                let bio = autor.bilografia.replace(/\n/g,' <br>');

                $('#detalle-nombre-autor').html(autor.nombre);
                $('#email-autor').html('');
                $('#semblanza-autor').html(bio);
                let imgUrl = window.baseUrlApi + 'global/img/autor_sin_foto.png';
                if(autor.url_foto && autor.url_foto !== ''){
                    imgUrl = window.baseUrlApi + 'global/' + autor.url_foto;
                }
                $('#foto-perfil-autor').css('background-image','url(' + imgUrl + ')');
            }else{
                alert('No se encontró la información del sitio. Intentalo de nuevo más tarde.');
                window.fn.popBtn();
            }
            break;

        default:
            console.log('No data available for '+page.id);
            break;
    }
});
