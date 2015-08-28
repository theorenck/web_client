$(document).ready(function(){

	/********** Data table - Organizar colunas **********/
	$('#table-notas').DataTable({
		"ordering": true,
		"paging": false,
		"searching": false,
		"info": false,
	});

/********** menu right  **********
	$('#menu-right').click(function(){
		$(this).toggleClass('aberto');
		$('.menu-right').toggleClass('aberto');
		$('#menu-right .fa-plus').toggleClass('girar-icon');
		$("#pesquisa").focus();
	});
*/
	$('#menu-right').click(function(){
		$(this).toggleClass('aberto');
		$('.menu-right').toggleClass('aberto');
		$('#menu-right .fa-times').toggleClass('hide');
		$('#menu-right .fa-search').toggleClass('hide');
		$("#pesquisa").focus();
	});


/********** menu left  **********
	$('#menu-left').click(function(){
		$(this).toggleClass('aberto');
		$('.menu-left-wrap').toggleClass('aberto');
		$('#menu-left .fa-plus').toggleClass('girar-icon');
		$("#pesquisa").focus();
	});

*/
/********** menu left  **********/
	$('#menu-left').click(function(){
		$(this).toggleClass('aberto');
		$('.menu-left-wrap').toggleClass('aberto');
		$('#menu-left .fa-times').toggleClass('hide');
		$('#menu-left .fa-sitemap').toggleClass('hide');
		$("#pesquisa").focus();
	});


/********** Afix  **********/
	$(document).on( 'scroll', function(){ 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
	$('.scroll-top-wrapper').on('click', scrollToTop);
	function scrollToTop() {
		verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}
});