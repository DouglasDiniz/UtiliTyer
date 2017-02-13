$(document).ready(function () {
    $('.utiliTyer-form').on('show.bs.modal', function (event) {  
		var atributos = $(event.relatedTarget).data();
		//console.log(atributos);
		
		var formulario;
		var campo;
		var executar;
		
		$(this).find('form').each(function () {
			//console.log($(this));
			formulario = $(this)[0];
			
			$(formulario).find('input, textarea, select').each(function () {
				campo = $(this)[0];
				executar = true;
				
				for(var index = 0; index < campo['classList'].length; index++) {
					if(campo['classList'][index] == 'utiliTyer-off'){
						executar = false;
						break;
					}
				}
				
				if(executar){
					//console.log($(this));

					if (campo.type === "radio" || campo.type === "checkbox") {
						
						$(campo).attr("checked", (campo.value == atributos[campo.name]) ? true : false);
					
					} else if(campo.type === "select-one" && length !== 0){
							
						$(campo).find("option").each(function () {
							$(this).attr("selected", ($(this).attr("value") == atributos[campo.name]) ? true : false);
						});
						
					}else{
						$(this).val(atributos[campo.name]);
					}
				}
			});
		});
    });
});