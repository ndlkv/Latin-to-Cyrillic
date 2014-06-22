String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function convert_to_cyrillic(text)
{
	var Lat2Cyr = text
					//DOUBLE LETTERS UPPERCASE
					.replaceAll("YU", "Ю")
				    .replaceAll("YA", "Я")
				    .replaceAll("ZH", "Ж")
				    .replaceAll("TS", "Ц")
				    .replaceAll("CH", "Ч")
				    .replaceAll("SHT", "Щ")
				    .replaceAll("SH", "Ш")
					//DOUBLE LETTERS LOWERCASE
				    .replaceAll("yu", "ю")
				    .replaceAll("ya", "я")
				    .replaceAll("zh", "ж")
				    .replaceAll("ts", "ц")
				    .replaceAll("ch", "ч")
				    .replaceAll("sht", "щ")
				    .replaceAll("sh", "ш")
					//UPPERCASE LETTERS
				    .replaceAll(" ", " ")
				    .replaceAll("A", "A")
				    .replaceAll("B", "Б")
				    .replaceAll("V", "В")
				    .replaceAll("G", "Г")
				    .replaceAll("D", "Д")
				    .replaceAll("E", "E")
				    .replaceAll("Z", "З")
				    .replaceAll("I", "И")
				    .replaceAll("J", "Й")
				    .replaceAll("K", "К")
				    .replaceAll("L", "Л")
				    .replaceAll("M", "M")
				    .replaceAll("N", "Н")
				    .replaceAll("O", "O")
				    .replaceAll("P", "П")
				    .replaceAll("R", "Р")
				    .replaceAll("S", "С")
				    .replaceAll("T", "T")
				    .replaceAll("W", "У")
				    .replaceAll("F", "Ф")
				    .replaceAll("H", "X")
				    .replaceAll("U", "Ъ")
				    .replaceAll("Y", "Ь")
				  	//LOWERCASE LETTERS
				    .replaceAll("a", "а")
				    .replaceAll("b", "б")
				    .replaceAll("v", "в")
				    .replaceAll("g", "г")
				    .replaceAll("d", "д")
				    .replaceAll("e", "е")
				    .replaceAll("z", "з")
				    .replaceAll("i", "и")
				    .replaceAll("j", "й")
				    .replaceAll("k", "к")
				    .replaceAll("l", "л")
				    .replaceAll("m", "м")
				    .replaceAll("n", "н")
				    .replaceAll("o", "о")
				    .replaceAll("p", "п")
				    .replaceAll("r", "р")
				    .replaceAll("s", "с")
				    .replaceAll("t", "т")
				    .replaceAll("w", "у")
				    .replaceAll("f", "ф")
				    .replaceAll("h", "х")
				    .replaceAll("u", "ъ")
				    .replaceAll("y", "ь");
	return Lat2Cyr;
}

function convertButton(){
var input = document.getElementById("LatinText").value;
var output = document.getElementById("CyrText").innerHTML = convert_to_cyrillic(input);
}