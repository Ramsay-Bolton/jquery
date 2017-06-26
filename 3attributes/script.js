//получение цвета шрифта
// $(".box").css('color') 

// $(".box").css({'color':'green',
// 	'font-size':'14px',
// 'margin-left':'10px'})

// $("#content").css('height', function(i, value) {
// 	return parseFloat(value)*1.2;
// })

// $("#content").removeClass('name') //удаление класса
// $("#content").addClass('name') //добавдение класса
// .hasClass("nameOfClass")//проверка на принадлежность к классу

// $("#content").addClass(index, function(i, value)) {
// 	return className;
// }

$("#content").toggle()

attr(attrName); //получение атрибута по имени
attr(attrName, attrValue); //присвоение значения атрибуту
removeattr(attrName); //удаление атрибута

var altText = $('img').attr('alt');//получение значения атрибута alt
$('img').attr('src', '/img/default.jpg'); //изменение значения атрибута src

$('a#my').attr({
	'href':'www.site.com'; //новое значение для атрибута
	'title':'JQuery forever!!!'; //новыы заголовок
})