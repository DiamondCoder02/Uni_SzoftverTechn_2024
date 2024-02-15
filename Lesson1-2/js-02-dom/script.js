/* Érdekesség! Így kérhetünk le időinformációkat: */

	var date = new Date();
	var hours = date.getHours();
	var day = date.getDay();

/*
1)
Az óra értéke alapján köszöntsük a felhasználót napszaknak megfelelően
A köszöntést a H1-es címsor tartalmaként helyezzük el
*/

	var title = "Szép napot!";

	if(hours <= 9)
	{
		title = "Jó reggelt!";
	}
	else
	if(hours > 19)
	{
		title = "Kellemes estét!";
	}

	document.querySelector('h1').innerHTML = title;

/*
2)
Az első szekció H2-es címét is módosítsuk: "Csodás hétfőre ébredhettünk"
Mindig az aktuális napot írjuk bele, a nap neve SPAN címkén belül szerepeljen
*/

	var days = ["vasárnapra", "hétfőre", "keddre", "szerdára", "csütörtökre", "péntekre", "szombatra"];

	document.querySelector('section h2').innerHTML = 'Csodás <span>'+ days[day] +'</span> ébredhettünk';

/*
3)
A második szekció legyen egy kiegészítő jellegű blokk (megjelenés szempontjából)
Rendeljük hozzá a "subSection" osztály-besorolást (a CSS-ben már szerepel ennek a stílusa)
*/

	var sections = document.querySelectorAll('section');
	var secondSection = sections[1];

	secondSection.classList.add("subSection");

/*
4)
A "Közösség" szekció linkjei között némelyiknek üres, vagy túl rövid (3 karakternél rövidebb) a "href" értéke
Ahol ilyen link szerepel, ott a lista-elemet rejtsük el (display=none)
*/

	var items = document.querySelectorAll('ul li');

	//Az összes lista-elemet meg kell vizsgálni
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		//A lista-elemen belüli linket kell megvizsgálnunk
		var link = item.querySelector("a");
		var href = link.getAttribute("href");

		if(href.length < 3)
		{
			//Magát a lista-elemet rejtjük el
			item.style.display = "none";
		}
	}