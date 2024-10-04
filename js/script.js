$(function() {

	// Smooth Scrolling
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
				&& 
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex','-1');
							$target.focus();
						};});}}
		});

	$('.main-carousel').flickity({
  	cellAlign: 'left',
  	contain: true,
		wrapAround: true,
	});

	$('.subscribe').on('submit', function(event) {
  	event.preventDefault();
    if ( $('#email-input').val() == '' ) {
      alert('Oops! You forgot to enter your email. Try again!');  
    } else {
      alert('Thanks for subscribing! We promise not to spam you!');}; 
  });

	$('#email-input').focus(function() {
		$('.subscribe').css('box-shadow', '1px 1px 5px #242424');
	});
	$('#email-input').blur(function() {
		$('.subscribe').css('box-shadow', 'none');
	});

	// Update margin spacing when window resizes
	$('.banner').css('marginTop', $('header').height());
	$(window).resize(function() {
		$('.banner').css('marginTop', $('header').height());
	});

});