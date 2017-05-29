window.addEventListener('load', setGoogleAnalytics, false);

function setUpSlideshow() {
"use strict";
	/* ----------------
SLIDESHOW
		This slideshow script is by Misti Wolanski
		http://mistiwolanski.com | https://github.com/Carradee
		If you use this script, please give credit where it’s due.
---------------- */
	/* ----------------
			define vars
	---------------- */
	var figures = document.querySelectorAll(".slideshow figure");
	var number = figures.length;
	var index = number-1;
	var buttons = document.querySelectorAll(".slideshow button");

	figures[0].classList.add("show");

// set up button tabbing
	buttons.forEach(function(element){
		element.tabindex = "0";
	}); // end forEach

// set up keyboard commands
document.onkeydown = checkKey;
function checkKey(press) {
	press = press || window.event;
	if (press.keyCode == '37') { // left arrow
		changeSlide(-1); // goto prev slide
	}
	else if (press.keyCode == '39') { // right arrow
		changeSlide(1); // goto next slide
	}
}

// set up slide changer
function changeSlide(n) {
	console.log("changeSlide(n) has been run");
	for (var i = 0; i < number; i++) {
		if (figures[i].classList.contains("show")) {
			var hide_pos = i;
		} // end if
	} // end for
		var show_pos = hide_pos + n;
		if (show_pos < 0) {show_pos = index;} 
		if (show_pos == undefined || show_pos > index) { show_pos = 0;}
figures[hide_pos].classList.remove("show");	figures[show_pos].classList.add("show");
} // end changeSlide(n)

} // setUpSlideshow()