//OFFSET

// var p = $(".first");
// var offset = p.offset();

// p.html("left:" + offset.left + ", top:" + offset.top);

// $(".thirdd").offset({top:10, left:350});

//POSITION

// var p = $(".first");
// var position = p.position();

// p.html("left:" + position.left + ", top:" + position.top);

//HEIGHT

function showHeight(element, height) {
	$("div").text("Height of the " + element + " is " + height);
}
$("#getp").click(function() {
	showHeight("paragraph", $("p").height());
});
$("#getd").click(function() {
	showHeight("document", $(document).height());
});
$("#getw").click(function() {
	showHeight("window", $(window).height());
});