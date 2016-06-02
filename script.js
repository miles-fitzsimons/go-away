$(document).ready(function() {
	var navPos = $("nav").offset().top;

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		// If nav bar is scrolled to top of the page
		if (navPos < winPos) {
			$("nav").css({"position": "fixed", "top": "0", "background-color": "#FFFFFF", "color": "#000000", "border-bottom": "solid 2px #D9D9D9"});
			$(".intro").css("height", "100vh");
			$("#navLogo").css("visibility", "visible");
			$("#navLogo").fadeIn();
			// $("#navContainer").css({"position": "fixed", "top": 0, "width": "100%"})
		}
		// If page scrolls above nav bar
		else {
			$(".intro").css("height", "85vh");
			// $("#navLogo").css("visibility", "hidden")
			$("#navLogo").fadeOut();

			var r = winPos / navPos;
			var fontColor = Math.floor((1 - r) * 255);
			fontColor = fontColor.toString(16);
			var bgColor = Math.floor(r * 256);
			bgColor = bgColor.toString(16);
			$("nav").css({"position": "initial", "top": "initial", "border-bottom": "none", "background-color": "#"+bgColor+bgColor+bgColor, "color": "#"+fontColor+fontColor+fontColor});
		}
	});

	// $("li").hover(function() {
	// 	$(this).css("border-bottom", "solid 1px #FFFFFF");
	// },
	// );



});