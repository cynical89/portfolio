//clipboard.js for copying to clipboard
new Clipboard("#email");

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
	$("#gmail").show("fade", "slow", 1000);
}, 300);
setTimeout(function(){
	$("#facebook").show("fade", "slow", 1000);
}, 1000);
setTimeout(function(){
	$("#github").show("fade", "slow", 1000);
}, 1700);
});
