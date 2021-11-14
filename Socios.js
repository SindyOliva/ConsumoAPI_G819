var UrlGetSocios = 'http://localhost:80/G8_19/controller/socios.php?op=GetSocios';

$(document).ready(function() {
    CargarSocios();
});

function CargarSocios() {
    $.ajax({
        url: UrlGetSocios,
        type: 'GET', //segun el metodo cambi aPOST
        datatype: 'JSON',
        success: function (response) {
            var MiItems = response;
            var Valores = '';
            //ciclo for que lee la respuesta de se obtiene de la url
            for (i = 0; i < MiItems.length; i++){
                Valores += '<tr>' +
                    '<td>' + MiItems[i].ID +'</td>' +
                    '<td>' + MiItems[i].NOMBRE +'</td>' +
                    '<td>' + MiItems[i].RAZON_SOCIAL +'</td>' +
                    '<td>' + MiItems[i].DIRECCION +'</td>' +
                    '<td>' + MiItems[i].TIPO_SOCIO +'</td>' +
                    '<td>' + MiItems[i].CONTACTO +'</td>' +
                    '<td>' + MiItems[i].EMAIL +'</td>' +
                    '<td>' + MiItems[i].FECHA_CREADO +'</td>' +
                    '<td>' + MiItems[i].ESTADO +'</td>' +
                    '<td>' + MiItems[i].TELEFONO +'</td>' +
                    '</tr>';
                $('.socios').html(Valores); //donde voy a depositar la respuesta que he obtenido (en la clase .socios)
            }
      }
    })
}