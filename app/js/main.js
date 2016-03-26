$(document).ready(function(){
	slider_intro();
	nav_scroll_to();
});


function slider_intro() {
	var step = 0;
	setInterval(function(){
		$('.big-word .word').eq(step).addClass('is-out');
		step++;
		step>2 ? step=0 : step=step;
		$('.big-word .word').eq(step).removeClass('is-out').addClass('is-active');
	}, 2000);
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