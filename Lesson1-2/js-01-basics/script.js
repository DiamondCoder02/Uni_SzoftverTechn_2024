
/*
1)
Válasszunk ki véletlenszerűen egy számot az 1-128 tartományból
Jelenítsük meg a számot egy H2 címsorban 
*/

	var number = Math.floor(Math.random() * 128) + 1;

	document.write('<h2>A generált szám: ' + number + '</h2>');


/*
2)
Állapítsuk meg a következőket:
- a kiválasztott érték egy, kettő, vagy három számjegyből áll
- a kiválasztott érték páros, vagy páratlan
A megállapításokat írjuk ki P bekezdésekbe
*/

	//Számjegyek

	if(number >= 100)
	{
		document.write('<p>A kiválasztott szám három számjegyből áll</p>');
	}
	else
	if(number >= 10)
	{
		document.write('<p>A kiválasztott szám két számjegyből áll</p>');
	}
	else
	{
		document.write('<p>A kiválasztott szám egy számjegyből áll</p>');
	}

	//Páros-páratlan

	if(number % 2 == 0)
	{
		document.write('<p>A kiválasztott szám páros</p>');
	}
	else
	{
		document.write('<p>A kiválasztott szám páratlan</p>');
	}


/*
3)
Az "items" tömb tárolja a bevásárló listánk tételeit
Soroljuk fel a tételeket egy UL listában
*/

	var items = ["Kenyér", "Margarin", "Sonka", "Sajt", "Tej"];

	document.write('<ul>');

	for(var i = 0; i < items.length; i++)
	{
		document.write('<li>' + items[i] + '</li>');
	}

	document.write('</ul>');


/*
4)
Hozzunk létre egy NxN-es méretű táblázatot
Készítsünk szorzótáblát, ami bemutatja az 1..N számok szorzatát
*/

	var N = 10;

	document.write('<table>');

	for(var i = 1; i <= N; i++)
	{
		document.write('<tr>');

		for(var j = 1; j <= N; j++)
		{
			var x = i * j;

			document.write('<td>' + x + '</td>');
		}
		document.write('</tr>');
	}

	document.write('</table>');

	r = Math.floor( Math.random() * 100 ); //0-99 tartomány

	r = 100 + Math.floor( Math.random() * 900 ); //Háromjegyű


/*
5)
Hozzunk létre egy "createLink" függvényt
A függvény a paraméterként kapott URL-ből és szövegből egy HTML linket készít
Jelenítsünk meg néhány általa készített linket
*/

	function createLink(url, text)
	{
		var link = '<a href="' + url + '" target="_blank">' + text + '</a> ';
		
		return link;
	}

	document.write( createLink("https://google.com", "Google") );
	document.write( createLink("https://facebook.com", "Facebook") );



