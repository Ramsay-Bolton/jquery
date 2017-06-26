// $(document).ready(function() {
// 	$("h1").css("color", "green");
// });

// $("h1").html("New text");

$('#btn_start').click(function() {
	$("#message")
	.html("Message")
	.css("background-color", "green")
	.parent()
	.css("background-color", "pink")
	.width(250)
	.heght(180)
});

$('#btn_reset').click(function() {
	location.reload();
})