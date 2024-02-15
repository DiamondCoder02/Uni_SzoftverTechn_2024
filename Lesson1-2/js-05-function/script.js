//Névtelen függvény
var numbers = [12, 321, 115, 54, 8, 93, 89, 76, 67];
//Számok rendezése az utolsó számjegy szerint
numbers.sort(function(a, b)
{
	return a % 10 - b % 10;
});
alert( numbers.toString() );

//Önhívó függvény
var main =
(function()
{
	alert("Fut a függvény");
	
	//Ezt a változót nem lehet kint elérni
	var step = 1;
	
	//Ennek a tömbnek a függvényei viszont hozzáférnek
	var methods = 
	[
		function()
		{
			step++;
		},
		function()
		{
			return step;
		}
	];
	
	return methods; //Ez kerül fent a MAIN-be
	
})();

//Nem tudom direkt módosítani, csak ezzel a függvénnyel
main[0]();
main[0]();
main[0]();

//Olvasni is csak ezzel a függvénnyel tudom
alert( "Lépés: "+ main[1]() );

//Person "osztály" (ES6 előtt)
function Person(fname, lname, born)
{
	//Publikus változók
	this.fname = fname;
	this.lname = lname;
	this.born = born;
	
	//Publikus metódus
	this.getFullName = function()
	{
		return this.fname +" "+ this.lname;
	}
	this.getAge = function()
	{
		return age;
	}
	
	//Privát (statikus) metódus
	function CalcAge(year)
	{
		return (new Date()).getFullYear() - year;
	}
	
	//Privát változó
	var age = CalcAge(this.born);
}

//Példány
var person = new Person("John", "Smith", 1995);
var info = `Név: ${person.getFullName()}, Született: ${person.born}, Kor: ${person.getAge()}`;

alert(info);





