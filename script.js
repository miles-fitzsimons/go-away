$(document).ready(function() {
	var navPos = $("nav").offset().top;

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();

		if (winPos - navPos >= 0) {
			$("nav").addClass("topScroll");
			$("nav").css("color","white");
		}
		if (winPos - navPos < 0) {
			$("nav").removeClass("topScroll");
			// When scrolling down, background colour changes from black (0) to white (255)
			var bgColor = 255 * winPos / navPos;
			var fontColor = 255 * (1 - winPos / navPos);
			console.log(bgColor, fontColor);
			var bgStr = "rgb("+bgColor+","+bgColor+","+bgColor+")";
			console.log(bgStr);
			$("nav").css("color",bgStr);



			// var r = winPos / navPos;
			// var rgb = 255 * (1 - r);
			// var str = "rgb(" + rgb.toString() + "," + rgb.toString() + "," + rgb.toString() + ")";
			// console.log(winPos, navPos ,r, rgb);
			// console.log(str);
			// $("nav").css("opacity", 1 - r);
			// $("nav").css("color", str);
		}
	});

	// Change BG colour - blk to white
	// Change font colour - white to blk
	// .topScroll includes opacity 0.5ish 

	// Add div "push" between navBar and about that appears to push it all down when navBar fixes in place?




});