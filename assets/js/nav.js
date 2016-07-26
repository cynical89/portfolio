//clipboard.js for copying to clipboard
new Clipboard("#gmail");

//hide all the social buttons
$("#github").hide();
$("#facebook").hide();
$("#gmail").hide();

//on document ready
$(document).ready(function () {
	//toggle toolip on gmail button pressed
	$("#gmail").click(function() {
			$("#gmail").tooltip('toggle')
			setTimeout(function(){
				$("#gmail").tooltip('destroy')
			}, 800);
	});

//show all social buttons slowly
setTimeout(function(){
	$("#gmail").css('visibility','visible').show("slide", "slow", 1000);
}, 500);
setTimeout(function(){
	$("#facebook").css('visibility','visible').show("slide", "slow", 1000);
}, 1200);
setTimeout(function(){
	$("#github").css('visibility','visible').show("slide", "slow", 1000);
}, 1900);

});
