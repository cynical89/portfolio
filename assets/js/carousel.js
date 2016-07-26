
var count = 1;

var carouselData = new Array();
carouselData = [];

$.getJSON("./assets/data/carousel.json", function(json) {
		for (var i = 0; i < json.data.length; i++) {
			if($("#" + "web").length > 0) {
			if (json.data[i].tag.indexOf("web") > -1) {
				carouselData.push(json.data[i])
			}
		}
		if($("#" + "game").length > 0) {
			if (json.data[i].tag.indexOf("game") > -1) {
				carouselData.push(json.data[i]);
			}
		}
		if($("#" + "utility").length > 0) {
			if (json.data[i].tag.indexOf("utility") > -1) {
				carouselData.push(json.data[i]);
			}
		}
	}
	addData();
	console.log(carouselData);
	$(".slides").slick({
		dots: true,
	});
});

function addData() {
	for (var i = carouselData.length -1; i >= 0; i--) {

		var $carouselItem = $('<div></div>');
		$('.slides').append($carouselItem);
		var $head1 = $('<h2></h2>');
		$($carouselItem).append($head1);
		$head1.text(carouselData[i].name);
		var $head2 = $('<h4></h4>');
		$($carouselItem).append($head2);
		$head2.text(carouselData[i].date);
		$($carouselItem).append("<hr>");
		var $text = $('<p></p>');
		$($carouselItem).append($text);
		$text.text(carouselData[i].description);
	}
}
