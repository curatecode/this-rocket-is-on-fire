$(document).ready(function() {
	
	$('.box').css({
		'height' : $(window).height(),
		'width'  : $(window).width()
	});

	$('.launcher a').on('click', function(e) {
		e.preventDefault();
		
		$('#fly-me').addClass('to-the-moon');
		
		$(this).parent().delay(1000).queue(function() {
			$(this).addClass('hide-me').dequeue();
		});

		setTimeout(function() {
			$('.launcher').removeClass('hide-me');
			$('#fly-me').removeClass('to-the-moon');
		},8000);
		
	});
});