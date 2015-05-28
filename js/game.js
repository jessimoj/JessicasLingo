
//Slumpar ett ord från listan
var points = 5000;
var ordlista = ["syren", "trend", "storm", "julig", "kaffe"];
var valtOrd = ordlista[Math.floor(Math.random()*5)];
console.log(valtOrd);

var spelrad = 0;
var spelplan = document.querySelectorAll("tr")[spelrad];


//Hämtar spelarens gissning

	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", function(){
		var anvandarOrd = document.getElementsByTagName("input")[0].value;



//HÄMTA RUTORNA OCH LÄGG I RÄTT RUTOR
	var rutor = document.getElementsByTagName("input")[0].value;
	

//HÄMTA RAD PÅ SPELPLAN
	var spelplan = document.querySelectorAll("tr")[spelrad];
	var rutor = spelplan.getElementsByTagName("td");

	//RÄTTNING AV GISSNING
	for(var i = 0; i < 5; i++) {
		rutor[i].innerHTML = anvandarOrd[i];

			if (anvandarOrd[i] === valtOrd[i]) {
				rutor[i].style.background = "#00FF7F";
			}
			else {
				rutor[i].style.background = "#FF1493";
			}
	}


	//OM SVARET ÄR AV FEL LÄNGD ELLER EJ BOKSTÄVER
		if (anvandarOrd == "" || anvandarOrd.length < 5) {
			alert("Din gissning måste innehålla minst 5 bokstäver.");

		};


	if (valtOrd === anvandarOrd) {

		alert("Snyggt, du gissade rätt! Du samlade ihop " + points + " poäng");

		//rensa alla tds
		for(var i = 0; i < 25; i++) {
			document.getElementsByTagName("td")[i].style.background = "#EED2EE";
			document.getElementsByTagName("td")[i].innerHTML = "";
		}

	}

	else {
			points -= 1000;
			spelrad++;

			if (points < 1000){
				alert("Tyvärr, du förlorade. Det valda ordet var " + valtOrd + ".")
			}
		};
	



	//Rätt eller fel-meddelande
	/*
		if (valtOrd === anvandarOrd) {
			alert("GRATTIIIIS!");
		}
		else{
			alert("Försök igen, kompis!");
		}
		*/

	});
	


