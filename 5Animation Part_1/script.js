// $(".anim").click(function (argument) {
// 	$(this).hide(800);
// });

// $(".anim").hide(1000, function() {
// 	alert("Hello!");
// });

// $("#stick").click(function() {
// 	$("#hide").slideDown()('slow');
// });

function changeClass() {
	$(this).prev().toggleClass("active");
}$(function() {
	$("article h2").click(function() {
		$(this).next().slideToggle(1000);
		$(this).toggleClass("active");
	});
});