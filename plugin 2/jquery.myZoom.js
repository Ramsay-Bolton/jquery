(function ($) {
$.fn.myZoom = function () {
	
	return this.each(function() {

		var ths           = $(this),
		    dataImage     = ths.data("image"),
		    dataSize      = ths.data("size"),
		    dataImageZoom = ths.data("image-zoom");
			
		ths
		.addClass("myZoom")
		.resize(function() {
			ths.find(".data-image").css({
				"width" : ths.width()
			})
		})
		.append("<img class='data-image' src='" + dataImage + "'><div class='zoom-loupe'><img src='" + dataImageZoom + "'>")
		.hover(function() {
			ths.find(".zoom-loupe").stop().fadeIn()
		}, function() {
			ths.find(".zoom-loupe").stop().fadeOut()
		})
		.find(".data-image").css({
			"width" : ths.width()
		}).parent().find(".zoom-loupe").css({
			"width" : dataSize,
			"height" : dataSize
		})
			.find("img").css({
			"position" : "absolute",
			"width" : ths.width()
		});
		
		ths.mousemove(function(e) {

			var elemPos = {},
				offset  = ths.offset();

			elemPos = {
				left : e.pageX - offset.left - dataSize/2,
				top  : e.pageY - offset.top - dataSize/2
			}

			ths
			.find(".zoom-loupe").css({
					"top"  : elemPos["top"],
					"left" : elemPos["left"]
				})
				.find("img").css({
					"top"   : -elemPos["top"],
					"left"  : -elemPos["left"],
					"width" : ths.width()
				})

		});

		$(window).resize(function() {
			$(".myZoom").resize();
		});

	});

};
})(jQuery);