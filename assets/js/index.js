new Clipboard("#email");

$(document).ready(function () {
	$("#email").click(function() {
			$("#email").tooltip('toggle')
			setTimeout(function(){
				$("#email").tooltip('destroy')
			}, 800);
	});
});
