function msieversion() {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	{
		alert("We do not support the use of internet explorer.  Please use any other browser. Link to chrome download here ---> https://www.google.com/chrome/");
	}

}

msieversion()



"use strict";


var inputSummoner = document.getElementById("dInput");

var url_string = window.location.href;
//console.log(`1st url ${url_string}`)
var url = new URL(url_string);
var input = {};
input.path = [{}];
input.path[0].id = url.searchParams.get("size");
if (input.path[0].id) changeStuff(input);

inputSummoner.addEventListener("keyup", function (event) {
	// Cancel the default action, if needed
	event.preventDefault();
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Trigger the button element with a click


		location.href = "http://maps.google.com/maps?saddr=”" + dInput.value + "”&daddr=”231 N Centennial St, Zeeland, MI 49464”";
	}
});

function formSubmit() {
	var nL = document.querySelectorAll(".normalInput");
	var data = Array.from(nL);
	var newD = data.map(function (line) {
		return line.value;
	});
	console.log("Name: " + newD[0] + ". Message: " + newD[3] + " Phone Number: " + newD[1] + " Email: " + newD[2]);
}

function menu() {
	var menu = document.querySelector('#menushow');
	menu.style.height = '90vh';
	menu.style.width = '95%';
}

function off() {
	var menu = document.querySelector('#menushow');
	menu.style.height = '0px';
	menu.style.width = '0px';
}

setTimeout(function () {

	$('#talkP, #letsTalk, #flex-words p, .box1, #flex-words h1, #flex-words h2').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
	$('#color').css({ 'transform': 'translateY(0px)' })
}, 0);

setTimeout(function () {

	$(' #find-us, .pure-group, .text-align, #flex-words a, .corner-left, .pure-button, #flex-words h3, #flex-words h4').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 250);
//home page unti sizing

setTimeout(function () {
	$('#unit1').css({ 'transform': 'translateY(0px)' });
	changeStuff({ path: [{ "id": "a" }] });
}, 0);

setTimeout(function () {
	$('#unit2').css({ 'transform': 'translateY(0px)' });
}, 200);

setTimeout(function () {
	$('#unit3').css({ 'transform': 'translateY(0px)' });
}, 400);

setTimeout(function () {
	$('.contact-dividor').css({ 'opacity': '1', 'transform': 'translateX(0px)' });

}, 500);


setTimeout(function () {

	changeStuff({ path: [{ "id": "a" }] });
}, 0);

setTimeout(function () {
	changeStuff({ path: [{ "id": "b" }] });
}, 400);

setTimeout(function () {
	changeStuff({ path: [{ "id": "c" }] });
}, 800);

setTimeout(function () {
	if (input.path[0].id) changeStuff(input); else changeStuff({ path: [{ "id": "a" }] });
}, 1200);

setTimeout(function () {
	$('#unit1').css({ 'transform': 'translateY(0px)' });
}, 0);

function changeStuff(event) {
	var pageWidth = $(window).width();
	var tab;
	if (event.path) tab = event.path[0].id; else tab = event.currentTarget.id;
	$(".sizeBody").removeClass("active");
	$('#sizeHead div').removeClass("on");
	$("#n" + tab).addClass("active");
	$("#" + tab).addClass("on");
	var size = document.getElementsByClassName('on')[0].innerHTML;
	$('.dropbtn').html("Unit Sizes - " + size + " <span class=\"menu\">menu </span> <i class=\"arrow fas fa-angle-double-down\"></i>");
	if (pageWidth < 768) {
		$('#sizeHead').css('display', 'none');
	}
}

var headNames = document.querySelectorAll('#sizeHead div');
headNames.forEach(function (name) {
	return name.addEventListener('click', changeStuff);
});

function expand() {
	$('#sizeHead').toggle();
}

