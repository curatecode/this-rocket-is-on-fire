$(document).ready(function() {
	$('.box').css({
		'height' : $(window).height(),
		'width'  : $(window).width()
	});
	$('.launcher a').on('click', function(e) {
		e.preventDefault();
		$('#fly-me').addClass('to-the-moon');
	});
});