function setUpTabs() {
"use strict";
/* ----------------
  TABS
  This tab script is by Misti Wolanski
  http://mistiwolanski.com | https://github.com/Carradee
  If you use id script, please give credit where it’s due.
---------------- */
// Declare all variables
  var buttons = document.querySelectorAll(".tabs button");
	var current_button;
  var sections = document.querySelectorAll(".tabs section");
	var current_section;

// show the first tabs
	buttons[0].classList.add("active");
	sections[0].classList.add("active");

// set up onclick
	buttons.forEach(function(element){
		element.onclick = changeTab;
	}); // end forEach

// get ".active" button
function getCurrentButton() {
	buttons.forEach(function(element){
		if (element.classList.contains('active')) {
			current_button = element;
		} // end if
	}); // end forEach
	return current_button;
} // end getCurrentButton()

// get ".active" section
function getCurrentSection() {
	sections.forEach(function(element){
		if (element.classList.contains('active')) {
			current_section = element;
		} // end if
	}); // end forEach
	return current_section;
} // end getCurrentSection()

// remove ".active" from inactive sections
function hideTab() {
  console.log("hideTab() has been run");
  current_section.classList.remove("active");
	current_button.classList.remove("active");
} // end hideTab()

// add ".active" to active section
function showTab(id) {
  console.log("showTab(id) has been run");
  sections.forEach(function(element){
    if (element.id === id) {
      element.classList.add("active");
    } // end if
  }); // end forEach
} // end showTab(id)

function changeTab() {
//  console.log("changeTab() has been run");
	current_button = getCurrentButton();
	current_section = getCurrentSection();
	if (this.name !== current_button.name) {
		this.classList.add("active");
		hideTab();
		showTab(this.name);
	} // end if 
} // end changeTab()
	
}; // end setUpTabs()

document.addEventListener('load', setUpTabs, false);