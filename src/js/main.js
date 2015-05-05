function boxSizr() {
	$('.box').css({
		'height' : $(window).height(),
		'width'  : $(window).width()
	});
};

$(document).ready(function() {

	boxSizr();

	$('.launcher a').on('click', function(e) {
		e.preventDefault();
		
		$('#fly-me').addClass('to-the-moon');
		$('.flame-container').addClass('active');
		
		$(this).parent().delay(1000).queue(function() {
			$(this).addClass('hide-me').dequeue();
		});

		setTimeout(function() {
			$('.launcher').removeClass('hide-me');
			$('#fly-me').removeClass('to-the-moon');
			$('.flame-container').removeClass('active');
		},15000);

	});
});

$(window).resize(function() {
	boxSizr();
});