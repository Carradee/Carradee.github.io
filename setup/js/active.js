function setActiveNavLink() {
"use strict";
/* ----------------
  If the page is taller than viewport, convert to columns.
  This script is by Misti Wolanski
  http://mistiwolanski.com | https://github.com/Carradee
  If you use this script, please give credit where it’s due.
---------------- */
// Declare all variables
var nav_links = document.querySelectorAll("#page-navigation a");
var nav_links_qty = nav_links.length;
var currentURL = window.location.href;
var i;

function removeClass(className) {
	nav_links.forEach(function(link){
		link.classList.remove(className);
	}); // end forEach
} // end removeClass(className)

function addClass(className, link) {
	link.classList.add(className);
} // end addClass(className, link)

function classToggle() {
	var className = "active";
	nav_links.forEach(function(link){
		if (link == currentURL) {
			removeClass(className);
			addClass(className, link);
		} // end if
	}); // end forEach
} // end classToggle()
classToggle();
} // end setActiveNavLink()

document.addEventListener('load', setActiveNavLink, false);