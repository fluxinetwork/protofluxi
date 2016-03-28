//READY

var breakM = 760;

$(document).ready(function(){
	slider_intro();
	nav_scroll_to();
	nav();
	contact();
	skills();
	methode();
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
	calc_windowW();
	if (windowW>breakM) {
	    $('.skill.is-active').click();
	}
}


// FUNCTIONS

function methode() {
	$('.js-show-step-details').on('click', function(){
		var itemToKill = $('.process__step.is-active');

		var parent = $(this).parent().parent().addClass('is-active');
		if (!$(this).hasClass('is-cross')) {
			$(this).toggleClass('is-cross').parent().next().addClass('is-open').slideToggle(250);
		}

		itemToKill.find('.is-open').removeClass('is-open').slideToggle(250);
		itemToKill.find('.is-cross').removeClass('is-cross')
		itemToKill.removeClass('is-active');
	});
}

function skills() {
	$('.js-expand-skill').on('click', function(e){
		$('.skill.is-active').removeClass('is-active');
		$(this).addClass('is-active');

		var modulo = Math.round($(this).parent().width()/$(this).width());
		var thisIndex = $(this).index()+1;
		var lineTarget = Math.ceil(thisIndex/modulo);

		calc_window();
		if (windowW>breakM) {
			var nbLines = Math.ceil($('.skill').length/modulo)-1;
			if (thisIndex>modulo*nbLines) {
				$('.skill-detail').appendTo($('.skills-list'));
			} else {
				$('.skill').eq(modulo*lineTarget-1).after($('.skill-detail'));	
			}
		} else {
			$(this).after($('.skill-detail'));
		}

		$('.skill-detail').addClass('is-open');
	});
}

function contact() {
	$('.equipe').waypoint(function(){
		$(this.element).toggleClass('is-active');
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

	    $('.navlist .is-active').removeClass('is-active');
	    $(this).parent().addClass('is-active');

	    var target = this.hash;
	    var $target = $(target);
	    calc_windowW();
	    var scrollY = windowW>breakM ? scrollY = $target.offset().top-$('.nav').height() : $target.offset();

	    $('html, body').stop().animate({
	        'scrollTop': scrollY
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