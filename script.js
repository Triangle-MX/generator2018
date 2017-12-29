var Quotation=new Array()
Quotation[0] = "haré más deporte.\"";
Quotation[1] = "leeré al menos un libro.\"";
Quotation[2] = "mejoraré mi ortografía.\"";
Quotation[3] = "correré 1 kilómetro diario, no menos, como 5.\"";
Quotation[4] = "se va a hacer o no se va a hacer la carnita asada?\"";
Quotation[5] = "leeré al menos 5 libro.\"";
Quotation[6] = "voy a ahorrar.\"";
Quotation[7] = "no procastinaré... Mejor el próximo.\"";
Quotation[8] = "estaré con más mi familia.\"";
Quotation[9] = "voy a sonreír más.\"";
Quotation[8] = "me levantaré más temprano.\"";
Quotation[8] = "comeré más sano.\"";
Quotation[8] = "iré al gimnasio... Pero ahora si enserio.\"";



var Q = Quotation.length;

var whichQuotation=Math.round(Math.random()*(Q-1));
var meta = "\"Este 2018 " + Quotation[whichQuotation];

var Color=new Array()
Color[0] = "ffb61e";
Color[1] = "e74c3c";
Color[2] = "c0392b";
Color[3] = "f39c12";
Color[4] = "f1c40f";
Color[5] = "3498db";
Color[6] = "2980b9";
Color[7] = "2ecc71";
Color[8] = "27ae60";
Color[9] = "9b59b6";
Color[10] = "8e44ad";



var C = Color.length;

var whichColor=Math.round(Math.random()*(C-1));

// Coala //
$(function() {

    $("#main").css({

        backgroundColor: '#' + Color[whichColor]

    });

    $("#frase").text("\"Este 2018 " + Quotation[whichQuotation]);

    $("#frase").css({

        //color: '#' + Color[whichColor]

    });

    $("#reload").css({

        backgroundColor: '#' + Color[whichColor]

    });

    $('meta[name=changeable]').remove();
    $('head').append( '<meta name=\"changeable\" property=\"og:title\" content=' + meta + '\"/>' );

});

$(document).ready(function(){

$('#reload').on('click',function(){
var whichColor=Math.round(Math.random()*(C-1));
    $("#main").css({

       backgroundColor: '#' + Color[whichColor]

   });

    var whichQuotation=Math.round(Math.random()*(Q-1));
    $("#frase").text("\"Este 2018 " + Quotation[whichQuotation]);

    $("#frase").css({

        //color: '#' + Color[whichColor]

    });

    $("#reload").css({

        backgroundColor: '#' + Color[whichColor]

    });

    $('meta[name=changeable]').remove();
    $('head').append( '<meta name=\"changeable\" property=\"og:title\" content=' + meta + '\"/>' );

});

});




function share() {
    var title = meta;
    var summary = 'Adiós 2017... Hola 2018...';
    var url = 'https://triangle.mx';
    var image = 'https://res.cloudinary.com/dfotkok8k/image/upload/v1514520921/fb-preview_o2rloi.png';
    var fb = window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent(title)+'&p[url]='+encodeURIComponent(url)+'&p[summary]='+encodeURIComponent(summary)+'&p[images][0]='+encodeURIComponent(image));
    fb.focus();
}
