/*
A dokumentumban található két szekció, melyek kis ablakokként funkcionálnak
Tegyük őket vonszolhatóvá
*/

//Ebben tároljuk a vonszolás alatt álló elemet
var dragElem = null;

//Egérgomb lenyomására: regisztráljuk a vonszolandó elemet
function MouseDown()
{
	dragElem = this;
}
//Az egér mozgatásakor: ha van olyan elem, akit vonszolunk, megváltoztatjuk a pozícióját
function MouseMove(evt)
{
	if(dragElem)
	{
		var left = dragElem.offsetLeft + evt.movementX;
		var top = dragElem.offsetTop + evt.movementY;
		
		dragElem.style.left = left +"px";
		dragElem.style.top = top +"px";
	}
}
//Egérgomb felengedése: nem vonszolunk senkit 
function MouseUp()
{
	dragElem = null;
}

//Lekérjük az összes SECTION elemet
var sections = document.querySelectorAll('section');

//Beállítjuk mindegyikhez a "MouseDown" eseményt
for(var i = 0; i < sections.length; i++)
{
	sections[i].onmousedown = MouseDown;
}

//A többit érdemes inkább a BODY-hoz rendelni
document.body.onmouseup = MouseUp;
document.body.onmousemove = MouseMove;
//Hasznos, ha a dokumentum elhagyásakor is bekövetkezik a "MouseUp"
document.body.onmouseleave = MouseUp;

