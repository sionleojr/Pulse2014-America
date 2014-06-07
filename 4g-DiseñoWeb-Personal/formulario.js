var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$primerPost = $('.item').first(),
	$lista = $('#contenido');

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());
},1000)

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		clone= $primerPost.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	clone.hide();

	$lista.prepend(clone);
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
	return false;
}

//Eventos
$('#publicar_nav a').click(mostrarOcultarFormulario);
$('#formulario').on('submit',agregarPost);