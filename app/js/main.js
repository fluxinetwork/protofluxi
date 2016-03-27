$(document).ready(function(){
	slider_intro();
	nav_scroll_to();
	nav();
	contact();
	skills();
});

function skills() {
	$('.skill').on('click', function(){
		$('.skill.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.skills').addClass('mode-detail');
		$('html, body').animate({'scrollTop': $('.skills').offset().top}, 250);
	});
}

function contact() {
	$('.equipe').waypoint(function(){
		$(this.element).toggleClass('is-active');
		console.log($(this));
	}, {offset: '90%'});
}


function nav() {
	$('.fluxi-id').waypoint(function(){
		$('.nav__logo').toggleClass('is-active');
	}, {offset: '5%'});
}


function slider_intro() {
	var step = 0;
	setInterval(function(){
		$('.big-word .word').eq(step).addClass('is-out');
		step++;
		step>2 ? step=0 : step=step;
		$('.big-word .word').eq(step).removeClass('is-out').addClass('is-active');
	}, 3000);
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