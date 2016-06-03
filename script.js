$(document).ready(function() {
	var navPos = $("nav").offset().top;

	function scrollPos() {
		var winPos = $(window).scrollTop();
		return winPos / navPos;
	}

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		// If nav bar is scrolled to top of the page
		if (navPos < winPos) {
			$("nav").css({"position": "fixed", "top": "0", "background-color": "#FFFFFF", "color": "#000000", "border-bottom": "solid 2px #D9D9D9"});
			$(".intro").css("height", "100vh");
			$("#navLogo").css("visibility", "visible");
			$("#navLogo").fadeIn();
		}
		// If page scrolls above nav bar
		else {
			$(".intro").css("height", "85vh");
			$("#navLogo").fadeOut();

			var r = scrollPos();
			var fontColor = Math.floor((1 - r) * 255);
			fontColor = fontColor.toString(16);
			var bgColor = Math.floor(r * 256);
			bgColor = bgColor.toString(16);
			$("nav").css({"position": "initial", "top": "initial", "border-bottom": "none", "background-color": "#"+bgColor+bgColor+bgColor, "color": "#"+fontColor+fontColor+fontColor});
		}

		// Underline nav bar links when viewing section
		var aboutTop = $("#aboutHead").offset().top;
		var thoughtsTop = $("#thoughtsHead").offset().top;
		var contactTop = $("#contactHead").offset().top;
		var navHeight = $("nav").height();
		console.log(aboutTop, thoughtsTop, contactTop, winPos, navHeight);
		if (winPos + navHeight > contactTop) {
			console.log("yes3");
			$("#contactNav").css("border-bottom", "solid 2px #000000");
			$("#thoughtsNav").css("border-bottom", "none");
			$("#aboutNav").css("border-bottom", "none");			
		}
		else if (winPos + navHeight > thoughtsTop) {
			console.log("yes2");
			$("#contactNav").css("border-bottom", "none");
			$("#thoughtsNav").css("border-bottom", "solid 2px #000000");
			$("#aboutNav").css("border-bottom", "none");			
		}
		else if (winPos + navHeight > aboutTop) {
			console.log("Yes");
			$("#contactNav").css("border-bottom", "none");
			$("#thoughtsNav").css("border-bottom", "none");
			$("#aboutNav").css("border-bottom", "solid 2px #000000");
		}
		else {
			$("#contactNav").css("border-bottom", "none");
			$("#thoughtsNav").css("border-bottom", "none");
			$("#aboutNav").css("border-bottom", "none");
		}
	});

	// Bottom borders on hover on nav bar items
	$(".notEDA").hover(function() {
		var r = scrollPos();
		if (r < 1) {
			var col = Math.floor((1 - r) * 255);
			col = col.toString(16);
			$(this).css("border-bottom", "solid 2px #"+col+col+col);
		}
		else {
			$(this).css("border-bottom", "solid 2px #000000");
		}
	}, function() {
		$(this).css("border-bottom", "none");
	});

	// Animate scrolling

});


// TO DO
// Make Nav Bar links "active" with underline with in view