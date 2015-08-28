$(document).ready(function(){	
/********** menu animado  **********/
	$('#btn-menu-right').click(function(){
		$(this).toggleClass('aberto');
		
		$('.menu-right').toggleClass('aberto');

		$('#fa-search').toggleClass("hidden");
		$('#fa-times-search').toggleClass("hidden");
		$("#pesquisa").focus();
	});

/********** Animação abrir tab pedido  **********/
	$("#a-tab-cliente").click(function(){
		$("#a-tab-cliente .fa-chevron-down").toggleClass('girar-cima');
	});
	$("#a-tab-itens").click(function(){
		$("#a-tab-itens .fa-chevron-down").toggleClass('girar-cima');
	});
	$("#a-tab-tributo").click(function(){
		$("#a-tab-tributo .fa-chevron-down").toggleClass('girar-cima');
	});
	$("#a-tab-entrega").click(function(){
		$("#a-tab-entrega .fa-chevron-down").toggleClass('girar-cima');
	});
	$("#a-tab-observacao").click(function(){
		$("#a-tab-observacao .fa-chevron-down").toggleClass('girar-cima');
	});
});