class sitiosHelper {

    constructor(sitio) {
        this.sitio = sitio;
        this.cardHtml = '';
        this.sliderHtml = '';
    }

    getCardHtml(){
        this.cardHtml = '<div class="sitios-card card" onclick="window.fn.goDetalleSitio('+ this.getIdInArray()  +')">'+
            '<h2 class="card__title">' + this.getNombreSitio() + '</h2>' +
            '<div class="card__content">' +
            '<div class="card-main-image">' + this.getMainImage() + '</div>' +
            '<div class="card-address-content">' + this.getUbicacionSitio()  + '</div>' +
            '</div>' +
            '</div>';
        return this.cardHtml;
    }

    getMainImage(){
        if(typeof this.sitio.CtMedia !== 'undefined' && this.sitio.CtMedia.length > 0){
             return '<img src="' + window.baseUrlApi + 'global/' + this.sitio.CtMedia[0].ruta + '" alt="'+ this.getNombreSitio() +'" class="sitio-list-image">';
        }else{
            return '';
        }
    }

    getIdSitio(){
        if(typeof this.sitio.id_locacion !== 'undefined'){
            return this.sitio.id_locacion;
        }else{
            return '';
        }
    }

    getNombreSitio(){
        if(typeof this.sitio.nombre !== 'undefined'){
            return this.sitio.nombre;
        }else{
            return '';
        }
    }

    getUbicacionSitio(){
        if(typeof this.sitio.ubicacion !== 'undefined'){
            return this.sitio.ubicacion;
        }else{
            return '';
        }
    }

    getContenidoSitio(){
        if(typeof this.sitio.html_cotenido !== 'undefined'){
            return this.sitio.html_cotenido;
        }else{
            return '';
        }
    }

    getIdInArray(){
        if(typeof window.locacionesInfo !== 'undefined' && window.locacionesInfo.length > 0){
            for(let i = 0; i < window.locacionesInfo.length; i++){
                if(window.locacionesInfo[i].id_locacion == this.sitio.id_locacion){
                    return i;
                    break;
                }
            }
        }
        return null;
    }

    getSliderHtml(){
        if(typeof this.sitio.CtMedia !== 'undefined' && this.sitio.CtMedia.length > 0){
            this.sliderHtml = '<ons-carousel swipeable auto-scroll overscrollable centered id="sitio-carousel">';
            for(let i = 0; i < this.sitio.CtMedia.length; i++){
                this.sliderHtml += '<ons-carousel-item class="slider-content">';
                this.sliderHtml += '<img src="' + window.baseUrlApi + 'global/' + this.sitio.CtMedia[i].ruta + '" alt="'+ this.getNombreSitio() +'" class="sitio-image-slider">';
                this.sliderHtml += '</ons-carousel-item>';
            }
            this.sliderHtml += '</ons-carousel>';
        }
        return this.sliderHtml;
    }

    getNombreAutor(){
        if(typeof this.sitio.CtAutor !== 'undefined' && this.sitio.CtAutor.nombre){
            return this.sitio.CtAutor.nombre;
        }else{
            return 'Sin autor';
        }
    }



}