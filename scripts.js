// scripts.js

var span = $('span');

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');  // lub $("span:even").css('color', 'red')
	};
});

var paragraphs = $('p');  // wszystkie akapity

paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';  // dodanie do każdego paragrafu przycisk data-tmp równym indeksowi przycisku
	$(element).append(button);
});

$('button').click(function () {
	alert($(this).attr("data-tmp"));
});