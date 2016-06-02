$(document).ready(function() {
	var navPos = $("nav").offset().top;
	console.log("navPos = " + navPos);

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		// If nav bar is scrolled to top of the page
		if (navPos < winPos) {
			$("nav").css({"position": "fixed", "top": "0", "background-color": "#FFFFFF", "color": "#000000", "border-bottom": "solid 2px #D9D9D9"});
			$(".intro").css("height", "100vh");
		}
		// If page scrolls above nav bar
		else {
			$(".intro").css("height", "85vh");
			var r = winPos / navPos;
			console.log("winPos = " + winPos + "  navPos = " + navPos + "  r = " + r);
			var fontColor = Math.floor((1 - r) * 255);
			fontColor = fontColor.toString(16);
			var bgColor = Math.floor(r * 256);
			bgColor = bgColor.toString(16);
			console.log("bgColor = " + bgColor + "  fontColor = " + fontColor);
			$("nav").css({"position": "initial", "top": "initial", "border-bottom": "none", "background-color": "#"+bgColor+bgColor+bgColor, "color": "#"+fontColor+fontColor+fontColor});
		}
	});
});