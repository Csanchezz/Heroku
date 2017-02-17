(function( InformeMye, $, undefined ) {
    //Private Property
    var get_form = function () {
        $('#tbody-escuela').html('');
        var campos = [];
        $('input[name=campos]').each(function (index, item) {
        	if ($(item).prop('checked') == true) {
        		campos.push($(item).val());
        	};
        });
        return {
            q: $('#id_codigo').val(),
            forward: JSON.stringify({
                municipio: $('#id_municipio').val(),
                departamento_mye: $('#id_departamento_mye').val(),
                cooperante_mye: $('#id_cooperante_mye').val(),
                nombre: $('#id_nombre').val(),
                proyecto: $('#id_proyecto').val(),
                direccion: $('#id_direccion').val(),
                nivel: $('#id_nivel').val(),
                sector: $('#id_sector').val(),
                poblacion_max: $('#id_poblacion_max').val(),
                poblacion_min: $('#id_poblacion_min').val(),
                solicitud: $('#id_solicitud').val(),
                solicitud_id: $('#id_solicitud_id').val(),
                equipamiento: $('#id_equipamiento').val(),
                equipamiento_id: $('#id_equipamiento_id').val(),
                departamento_tpe: $('#id_departamento_tpe').val(),
                cooperante_tpe: $('#id_cooperante_tpe').val(),
                campos: campos,
            })
        }
    };

    var buscar_escuela = function (params) {
        $.ajax({
            type: 'get',
            url: params.url,
            dataType: 'json',
            data: params.data,
            success: function (respuesta) {
                params.callback(respuesta);
            }
        });
    };

    var get_fila_text = function (escuela) {
        var text = '<td>'+escuela.codigo+'</td>';
        text += '<td><a href="'+escuela.url+'">'+escuela.nombre+'</a></td>';
        text += '<td>'+escuela.direccion+'</td>';
        text += '<td>'+escuela.municipio+'</td>';
        text += '<td>'+escuela.departamento+'</td>';
        text += '<td>'+escuela.nivel+'</td>';
        text += '<td>'+escuela.poblacion+'</td>';
		
        //aquí por ejemplo
        return '<tr>'+text+'</tr>';
    };
    
    //titulos extra
    var get_th_extra = function(escuelaplus){
    	var title = ""
    	$(campos).each(function(index, item){
    		title += '<th>' + item + '</th>';
    	});
    };
    //$('#thead-escuela').append(get_th_extra(escuelaplus.title));


    // Public
    InformeMye.init = function () {
        $('#form_buscar_escuela').submit(function (e) {
            e.preventDefault();
            $('#encontradas').html("Buscando...");
            buscar_escuela({
                url: $('#id_nombre').data('ajax--url'),
                data: get_form(),
                callback: function (respuesta) {
                    $('#encontradas').html(respuesta.results.length + " escuelas encontradas");
                    $.each(respuesta.results, function (index, escuela) {
                        $('#tbody-escuela').append(get_fila_text(escuela.text));
                    });


                }
            });
        });
    }   
}( window.InformeMye = window.InformeMye || {}, jQuery ));