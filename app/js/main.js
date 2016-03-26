$(document).ready(function(){
	slider_intro();
	nav_scroll_to();
});


function slider_intro() {
	$('.controls .dot').on('click', function(){
		$('.controls .dot').removeClass('is-active');
		$(this).addClass('is-active');

		$('.slide.is-active').removeClass('is-active');
		$('.slide').eq($('.dot.is-active').index()).addClass('is-active');
	})
}

function nav_scroll_to() {
	$('.js-scroll-to[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
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