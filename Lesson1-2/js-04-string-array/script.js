/*
1)
Kérjük be a felhasználótól a születési dátumát "YYYY-mm-dd" formában
Írjuk ki, hogy mennyi idős (kb év alapján) és mi lehet a csillagjegye
(tegyük fel, hogy minden hónap 21-én kezdődik a következő)
Segítség - az aktuális év: (new Date()).getFullYear()

2)
Ellenőrizzük a bevitt értéket, hogy valóban megfelel az elvárt 
formátumnak: "YYYY-mm-dd"
*/

//Amennyiben a gombra kattint
document.querySelector('button').onclick = function(e)
{
	//Ne küldje el az űrlapot (ne töltődjön újra a lap)
	e.preventDefault();
	
	//Dátum kiolvasása
	var born = document.getElementById("born").value;
	
	if(born.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))
	{
		//Szétbontása
		born = born.split('-');

		//Numerikus értékek
		var year = parseInt( born[0] );
		var month = parseInt( born[1] );
		var day = parseInt( born[2] );

		var age = (new Date()).getFullYear() - year;

		var zodiacList = ["Bak", "Vízöntő", "Halak", "Kos", "Bika", "Ikrek", 
							"Rák", "Oroszlán", "Szűz", "Mérleg", "Skorpió", "Nyilas"];

		if(day < 21) month--;
		month = month % 12;

		var zodiac = zodiacList[month];

		var response = `Te most ${age} éves lehetsz, a csillagjegyed pedig ${zodiac}`;
		alert(response);
	}
};

/*
3)
Vegyünk fel tömbbe a hónapok nevét
Írjuk ki őket hosszuk szerint csökkenő sorrendben egy UL listába
Mely hónapok végződnek úgy, hogy "ber"?
*/

var months = ["Január", "Február", "Március", "Április", "Május", "Június",
				"Július", "Augusztus", "Szeptember", "Október", "November", "December"];

//Összehasonlítás hossz alapján
function CompByLength(a, b)
{
	return a.length - b.length;
}

//Rendezés
months.sort(CompByLength);
//Visszafelé
months.reverse();

//Lista létrehozás és hozzáadása
var ul = document.createElement("ul");
document.body.appendChild(ul);

//Elemek a listába
for(var m of months)
{
	ul.innerHTML += `<li>${m}</li>`;
}

//Újabb lista
ul = document.createElement("ul");
document.body.appendChild(ul);

//Végig az elemeken
for(var m of months)
{
	//Ha a vége "ber"
	if(m.endsWith("ber"))
	{
		ul.innerHTML += `<li>${m}</li>`;
	}
}
/* Érdemes lehet kipróbálni a tömbök "find" metódusát is */