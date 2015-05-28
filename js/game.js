
//Slumpar ett ord från listan
var ordlista = ["syren", "trend", "storm"];
var valtOrd = ordlista[Math.floor(Math.random()*3)];
console.log(valtOrd);

//Hämtar spelarens gissning
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
	var anvandarOrd = document.getElementsByTagName("input")[0].value;

//HÄMTA RUTORNA OCH LÄGG I RÄTT RUTOR
	var rutor = document.getElementsByTagName("input")[0].value;

	var rutor = document.getElementsByTagName("td");

	for(var i = 0; i < 5; i++) {
		rutor[i].innerHTML = anvandarOrd[i];

			if (anvandarOrd[i] === valtOrd[i]) {
				rutor[i].style.background = "#00FF7F";
			}
			else {
				rutor[i].style.background = "#FF1493";
			}
	}

		if (valtOrd === anvandarOrd) {
			alert("GRATTIIIIS!");
		}
		else{
			alert("Försök igen, kompis!");
		}
	});