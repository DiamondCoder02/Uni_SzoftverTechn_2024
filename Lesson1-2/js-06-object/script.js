/*
Inicializálásként töröljük a táblázat törzsét
*/

var tbody = document.querySelector('table tbody');
tbody.innerHTML = '';

/*
1)
Hozzunk létre egy - a betáplált adatoknak megfelelő - objektumot
Képezzünk egy tömböt a bevitt objektumokból
Az adatbevitelt követően frissítsük a táblázat törzsét

2)
Tároljuk a bevitt értékeket hosszabb távon:
A helyi tárban, JSON formátumú szövegként
*/

//Az üres tömb
var records = [];

//Adatok betöltése (és megjelenítés)
var stored = localStorage.getItem("data");
if(stored)
{
	records = JSON.parse(stored);
	UpdateTable();
}

//A gombra kattintva
document.querySelector('button').onclick = function(evt)
{
	evt.preventDefault();
	
	//Objektum létrehozása (a beírt adatoknak megfelelően)
	var entity = 
	{
		id: parseInt( document.getElementById('id').value ),
		name: document.getElementById('name').value
	};
	
	//Hozzáadás és frissítés
	records.push(entity);
	UpdateTable();
	
	//Adatok tárolása
	stored = JSON.stringify(records);
	localStorage.setItem("data", stored);
	
	//Űrlap kiürítése
	document.querySelector('form').reset();
};

//Táblázat frissítése a tömbben tárolt rekordok alapján
function UpdateTable()
{
	var html = '';
	
	for(var record of records)
	{
		html += `<tr><td>${record.id}</td><td>${record.name}</td></tr>`;
	}
	
	tbody.innerHTML = html;
}
