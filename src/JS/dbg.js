
let password = [];
const code = "summon dbg";

window.addEventListener("keyup", addKeys);


function addKeys(e){
	password.push(e.key);
	password.splice(-code.length - 1, password.length - code.length);
	if(password.join('').includes(code)){
		document.querySelector(".dbg").style.setProperty("display", "inline-block")
	} else if(password.join("").includes("off")) {
		document.querySelector(".dbg").style.setProperty("display", "none")
	}
	console.log(password);
}

function initMap() {
  // The location of Uluru
  var uluru = {lat: 42.817454, lng: -86.011161};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}