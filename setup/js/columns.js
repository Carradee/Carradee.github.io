"use strict";
/* ----------------
  If the page is taller than viewport, convert to columns.
  This script is by Misti Wolanski
  http://mistiwolanski.com | https://github.com/Carradee
  If you use this script, please give credit where it’s due.
---------------- */
// Declare all variables
var page_wrapper = document.getElementById('page-wrapper');
var page_content = document.getElementById('page-content');
console.log("page_wrapper = " + page_wrapper);
console.log("page_content = " + page_content);

var wrapper_width = page_wrapper.clientWidth;
var wrapper_height = page_wrapper.clientHeight;
console.log("wrapper_width = " + wrapper_width);
console.log("wrapper_height = " + wrapper_height);

var content_width = page_content.clientWidth;
var content_height = page_content.scrollHeight;
console.log("content_width = " + content_width);
console.log("content_height = " + content_height);

var column_count = Math.ceil(content_height / wrapper_height);
var column_width = 100 / column_count;
console.log("column_count = " + column_count);
console.log("column_width = " + column_width);

var CSS_class_name = ".cols-" + column_count;
var CSS_column_count = CSS_class_name + "{" +
	"-moz-column-count:" + column_count + ";" +
	"-webkit-column-count:" + column_count + ";" +
	"column-count:" + column_count + ";" +
	"-moz-column-width:" + column_width + ";" +
	"-webkit-column-width:" + column_width + ";" +
	"column-width:" + column_width + ";" +
	"-webkit-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;" +
	"overflow-x: scroll;" +
	"}";
console.log("CSS_class_name = " + CSS_class_name);
console.log("CSS_column_count = " + CSS_column_count);

// if warranted, add class to id
function addColumns() {
	if ( column_count > 1 ) {
		page_content.getElementsByTagName("article").className += CSS_class_name;
	}
}

document.addEventListener("DOMContentLoaded",addColumns);
document.addEventListener("resize",addColumns);