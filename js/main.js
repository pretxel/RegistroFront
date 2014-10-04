$(document).ready(function() {
    $('#attributeForm').bootstrapValidator({
    	 feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
             fields: {
             	numeroEmple:{
             	 		validators: {
             	 			notEmpty: {
             	 				message: "Numero de Empleado Requerido"
             	 			},
             	 			regexp: {
                            	regexp: /^[a-zA-Z0-9]+$/,
                            	message: 'Debe contener caracteres alfanumericos'
                        	}
             	 		}		
             		}
             }
    	});


    $("#numeroEmple").focus();

     $('#attributeForm').submit(function(){
     	if($("#numeroEmple").val() != ""){
     		$('#modalExam').modal('show')
            $('#confirmar').focus();
        }
     	return false;
     });

     $("#confirmar").click(function(){
     	$('#modalExam').modal('hide')
     	$("#numeroEmple").val("");
     	$('#attributeForm').data('bootstrapValidator').resetForm();
     	preloader.active(true);
     	messageSuccess("Registro Exitoso: " + $("#numero").val(), 3000);
        // preloader.active(false);
     });

     $("#cerrar").click(function(){
     	$("#numeroEmple").val("");
     	$('#attributeForm').data('bootstrapValidator').resetForm();

     });



     $.mockjax({
        url: '/empleado/list',
        responseText: [{ id: 1, name: '930063 - Edsel Serrano' },
                    { id: 2, name: '11111 - Oswaldo Fonseca' },
                    { id: 3, name: 'Daniel Adame' },
                    { id: 4, name: 'Edgar Mendoza' },
                     { id: 5, name: 'Edgar Martinez' }]
    });

    $('#numeroEmple').typeahead({
        ajax: { url: '/empleado/list', triggerLength: 3 }, 
        itemSelected: displayResult
    });


    $(".modal").keyup(function(event){

        if (event.which == 13){
              $('#modalExam').modal('hide')
                $("#numeroEmple").val("");
                $('#attributeForm').data('bootstrapValidator').resetForm();
                preloader.active(true);
                messageSuccess("Registro Exitoso: " + $("#numero").val(), 3000);
                preloader.active(false);
                 $("#numeroEmple").focus();
        }
    })
});






function displayResult(item, val, text) {
    console.log(item);
    messageSuccess("Seleccionaste: " + text, 2000);

    //$('.alert').show().html('Seleccionaste:  <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

