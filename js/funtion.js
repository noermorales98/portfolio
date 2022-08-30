let ubicacion = window.pageYOffset;
window.onscroll = function(){
    let ubicacionScroll = window.pageYOffset;
    if(ubicacion>ubicacionScroll){
        this.document.getElementById('header').style.top = '0';
        this.document.getElementById('header').style.boxShadow = '1px 5px 16px 0px #8080801c';
        this.document.getElementById('header').style.height = '10vh';
    }
    else{
        this.document.getElementById('header').style.top = '-200px';
    }
    ubicacion = ubicacionScroll;
    if(ubicacion<40){
        this.document.getElementById('header').style.boxShadow = 'none';
        this.document.getElementById('header').style.height = '15vh';
    }
}

$(window).scroll(function() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top
    }, 2000);
});