let data = 
[
	["aranyos", "aljas", "akaratos", "adakozó", "agyafúrt", "agyatlan", "alapos", "alázatos"],
	["ábrándos", "álnok", "áldott", "áldozat"],
	["bolondos", "bátor", "bájos", "barbár", "barátságos", "barátságtalan", "becsületes", "befolyásos", "beképzelt", "békés", "bizalmatlan", "bizonytalan", "boldog", "bolond", "bonyolult", "borzasztó", "bölcs", "bosszús", "botrányos", "büszke"],
	["céltudatos", "csodás", "cuki", "csábos", "csalfa", "csendes", "csinos"],
	["derűlátó", "durva", "dacos", "dekoratív", "derűlátó", "dilis"],
	["emberi", "elegáns", "erős", "eszes", "erotikus", "eszes", "eszetlen", "engedékeny"],
	["éleseszű", "éber", "édes", "érdekes", "érdektelen"],
	["furfangos", "félénk", "fafejű", "faragatlan", "felszínes", "fiatalos", "figyelmes", "figyelmetlen", "fondorlatos", "fontos", "furcsa"],
	["gondos", "gyengéd", "gátlásos", "gátlástalan", "gondatlan", "gonosz", "gyáva", "gyenge", "gyönyörű", "gyanús", "gyermeteg", "gyanakvó"],
	["helyes", "huncut", "haragos", "határozott", "határozatlan", "hazug", "hisztis", "hízelgő", "humoros", "hálátlan"],
	["intelligens", "idegesítő", "igazmondó", "illatos", "izgató", "izgatott", "imádnivaló", "illedelmes", "ijedős", "ijesztő"],
	["jószívű", "játékos", "jótékony", "jópofa", "jelentéktelen", "jellemtelen"],
	["kedves", "káprázatos", "kellemes", "kellemetlen", "keserű", "kényeskedő", "kegyes", "kemény", "kreatív"],
	["lehengerlő", "lusta", "léhűtő", "látványos", "lélegzetelállító", "leharcolt", "lenyűgöző", "lelkes"],
	["magabiztos", "magányos", "makacs", "mázlista", "morcos", "mogorva", "modoros", "modortalan", "művelt", "műveletlen", "mesebeli", "mennyei", "mérges", "mafla", "misztikus", "mesteri", "mókás", "mindentudó", "mosolygós"],
	["nagylelkű", "naprakész", "nyájas"],
	["okos", "oktondi", "olvasott", "ostorozó"],
	["óvatos", "óriási"],
	["önfejű", "öntelt", "önző", "önálló"],
	["pimasz", "páratlan", "pajkos", "példás", "piszkos fantáziájú"],
	["rámenős", "rendes", "rendszerető", "rettenetes", "romantikus", "romlott", "ravasz", "rosszcsont"],
	["segítőkész", "sikeres", "sikertelen", "szép", "szétszórt", "szomorú", "szívélyes", "szánalmas", "szeszélyes", "szerencsés"],
	["táncoslábú", "talpraesett", "türelmes", "türelmetlen", "törékeny", "találékony"],
	["unalmas", "udvarias", "udvariatlan", "utolérhetetlen", "utánozhatatlan"],
	["úrias", "újító"],
	["ügyes", "ügyetlen", "üres tekintetű"],
	["vagány", "varázslatos", "vakmerő", "vadító", "vidám", "vicces", "válogatós"],
	["zakkant", "zárkózott", "züllött", "zsarnok", "zsémbes", "zseniális", "zsugori"]
];

console.log("Ready");

var name = 'Barbara';
var day = 21;

var offset = Array(data.length).fill(0);
name = name.toLowerCase();

for(var char of name){
	var row = data.find(item => item[0][0] == char);
	console.log(row);
	console.log(data[row]);
	var words = data[row];
	console.log(words);
	var x = (day + offset[row]) % words.length;
	console.log(x);
	var word = words[x];

	console.log(word);
	offset[row]++;
}