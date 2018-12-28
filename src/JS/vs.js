function msieversion() {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	{
	alert("We do not support the use of internet explorer.  Please use any other browser. Link to chrome download here ---> https://www.google.com/chrome/");
	}
	
	}
	
	msieversion() 

	


function formSubmit() {
	var nL = document.querySelectorAll(".normalInput");
	let data = Array.from(nL)
	var newD = data.map(line => line.value);
	console.log(`Name: ${newD[0]}. Message: ${newD[3]} Phone Number: ${newD[1]} Email: ${newD[2]}`)
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
	$('#talkP, #letsTalk, #flex-words p, .box1, #flex-words h1, #flex-words a, #flex-words h2').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
	$('#color').css({ 'transform': 'translateY(0px)' })
}, 0);


setTimeout(function () {
	$(' #find-us, form, .text-align').css({ 'opacity': '1', 'transform': 'translateX(0px)' })
}, 300);

setTimeout(function () {
	$('.vehicle-box, #contact').css({ 'opacity': '1'})
}, 0);


//home page unti sizin



function vehicleFn(event) {
	var pageWidth = $(window).width();
	var tab;
	if (event.path) {
		tab = event.path[1].id;
		if (tab != 1 && tab != 2 && tab != 3 && tab != 4) tab = event.path[0].id;
	}
	else {
		tab = event.currentTarget.id;
	}

	console.log(tab);
	$('.vehicle-options div').removeClass("active");
	$(`#${tab}`).addClass("active");
	$('.vehicle-sizes div').removeClass("non-applicable");
	$('.vehicle-sizes div').removeClass("applicable");

	if (tab == 1) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("applicable");
		$(`#vs3`).addClass("applicable");
		$(`#vs4`).addClass("applicable");
		$(`#vs5`).addClass("applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");

		$(`.vd-type`).html("Motorcycle Storage");
		$(`.vd-description`).html("All sizes of motorcycle will fit in 10x10+. Some smaller motorcycles may fit in a 5x5")
	}

	if (tab == 2) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("applicable");
		$(`#vs5`).addClass("applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");

		$(`.vd-type`).html("Automobile Storage");
		$(`.vd-description`).html("Most automobiles will fit in 10x20+ units, Some smaller cars may fit in 10x15.")
	}

	if (tab == 3) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`#vs6`).addClass("non-applicable");
		$(`#vs7`).addClass("non-applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");

		$(`.vd-type`).html("Motorhome Storage");
		$(`.vd-description`).html("Due to the height restriction all large vehicles will require maximum size units.")
	}

	if (tab == 4) {
		$(`#vs1`).addClass("non-applicable");
		$(`#vs2`).addClass("non-applicable");
		$(`#vs3`).addClass("non-applicable");
		$(`#vs4`).addClass("non-applicable");
		$(`#vs5`).addClass("non-applicable");
		$(`#vs6`).addClass("applicable");
		$(`#vs7`).addClass("applicable");
		$(`#vs8`).addClass("applicable");
		$(`#vs9`).addClass("applicable");
		$(`#vs10`).addClass("applicable");
		
		$(`.vd-type`).html("Boat Storage");
		$(`.vd-description`).html("These Units Range wildly in size so they should be able to fit boats of all sizes. These units are limited in number.")
	}
}

const vehicleTabs = document.querySelectorAll('.vehicle-options div');
console.log(vehicleTabs);
vehicleTabs.forEach(type => type.addEventListener('click', vehicleFn));

function expand() {
	$('#sizeHead').toggle();
}

function dbg(){
	console.log('dbg')
	var dbg = document.getElementsByClassName("realdbg");
	dbg.innerHTML = '<img src="Images/dbg.png" alt="Smiley face" height="100px" width="150px">'
}



