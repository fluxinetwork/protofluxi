$(document).ready(function(){
	slider_intro();
});

function slider_intro() {
	$('.controls .dot').on('click', function(){
		$('.controls .dot').removeClass('is-active');
		$(this).addClass('is-active');

		$('.slide.is-active').removeClass('is-active');
		$('.slide').eq($('.dot.is-active').index()).addClass('is-active');
	})
}

/* Scroll to */

function scroll_to(position, duration, relative) {
	var coef;
	var top;
	var bottom;

	if (position === 'top') {
		position = 0;
		top = true;
	} else if (position === 'bottom') {
		position = $(document).height();
		bottom = true;
	} else {
		position = position.offset().top;
	}

	if (duration === 'fast') {
		coef = 0.1;
		duration = 200;
	} else if (duration === 'normal') {
		coef = 0.25;
		duration = 350;
	} else if (duration === 'slow') {
		coef = 0.4;
		duration = 500;
	} else {
		coef = duration/1000;
	}

	if (relative === true) {
		calc_windowH();
		if (top) {
			duration = $(document).height()*coef;
		} else if (bottom) {
			duration = ($(document).height()-$(document).scrollTop())*coef;
		}
	}

	$('html, body').animate({scrollTop: position}, duration);
}

/**
 * Get window sizes
 * Store results in windowW and windowH vars
 */

// Get width and height
function calc_window() {
	calc_windowW();
	calc_windowH();
}
// Get width
function calc_windowW() {
	windowW = $(window).width();
}
// Get height
function calc_windowH() {
	windowH = $(window).height();
}