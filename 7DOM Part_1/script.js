// var $myDiv = $('<div id="my" class="page">Hello</div>').appendTo("body");

// var $myDiv = $('<div id="my" class="page">Hello</div>').appendTo("#content");

var $myDiv = $('<div>Hello</div>', {'id':'my', 'class':'page'}).appendTo("#content");//через передачу массиваа параметров быстрее

var $myDiv = $('<div>Hello</div>').attr({'id':'my', 'class':'page'}).appendTo("#content"); //так еще быстрее

// $("p").after("<hr/>");
// $("<hr/>").insertAfetr("p");

// $("<hr/>").insertBefore("p");

$("p").append("<hr/>");

$("<p>PPPP</p>").appendTo("#content");
$("<p>PPPP</p>").prependTo("#content");