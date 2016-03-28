//READY


$(document).ready(function(){
	slider_intro();
	nav_scroll_to();
	nav();
	contact();
	skills();
});

// RESIZE

function debouncer( func , timeout ) {
    var timeoutID;
    var timeoutVAR;

    if (timeout) {
        timeoutVAR = timeout;
    } else {
        timeoutVAR = 200;
    }

    return function() {
        var scope = this , args = arguments;
        clearTimeout( timeoutID );
        timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
        }, timeoutVAR );
    };

}
$( window ).bind( "resize", debouncer(debouncer_handler) );

function debouncer_handler() {
    $('.skill.is-active').click();
}



// FUNCTIONS

function skills() {
	$('.skill').on('click', function(e){
		$('.skill.is-active').removeClass('is-active');
		$(this).addClass('is-active');

		var modulo = Math.round($(this).parent().width()/$(this).width());
		var thisIndex = $(this).index()+1;

		calc_windowW();

		if (windowW>759) {
			$('html, body').animate({'scrollTop': $(this).offset().top*0.7},250);
			var nbLines = Math.ceil($('.skill').length/modulo)-1;
			if (thisIndex>modulo*nbLines) {
				$('.wrap-detail').appendTo($('.skills-list'));
			} else {
				var index = Math.ceil(thisIndex/modulo);
				$('.skill').eq(modulo*index).after($('.wrap-detail'));	
			}
		} else {
			$('html, body').animate({'scrollTop': $(this).offset().top*0.9},250);
			$(this).after($('.wrap-detail'));
		}

		$('.wrap-detail').addClass('is-open');
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