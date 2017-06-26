(function ($) {
	
	$.fn.myParallax = function( options ) {

			var settings = $.extend({
				"speed" : "20"
			}, options);

		return this.each(function() {

			var ths = $(this);
			ths
			.css({
				"min-height":"300px",
				"color":"white",
				"position":"relative",
				"overflow":"hidden"
			})
			.wrapInner("<div class='content' style='position:relative; z-index:1'></div>")
			.prepend("<div class='image-parallax' style='background-image:url(" + $('#im').data('parallaximage') + ");background-position:top;position:absolute;background-size:cover;top:0;width:100%'></div>");

			function parallaxInit() {
				
				var pheight = ths.height();

				ths.children(".image-parallax").css({
					"height" : pheight * 2, //800px
					"top" : -pheight 
				});

				var st = $(document).scrollTop();
				var sp = ths.offset().top - $(window).height();
				var sr = st - sp;
				var ob = ths.offset().top + pheight;
				//включаем параллах на определенных условиях
				if (st >= sp && st <= ob) {//верхний край картинки попадает в окно браузера

					ths.children(".image-parallax").css({
						"transform" : "translate3d(0px, " + sr/settings.speed + "%, 0px)",
						"-webkit-transform" : "translate3d(0px, " + sr/settings.speed + "%, 0px)"
					})
				};
			};

			$(window).scroll(function() {
				parallaxInit();
			}).load(function() {
				parallaxInit();
			});
			$("*").resize(function() {
				parallaxInit();
			});
		});

	};

})(jQuery);