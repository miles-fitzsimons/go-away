$(document).ready(function() {
	var navPos = $("nav").offset().top;
	console.log("navPos = " + navPos);

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		console.log("winPos = " + winPos);
		// If nav bar is scrolled to top of the page
		if (navPos < winPos) {
			$("nav").css({"position": "fixed", "top": 0});
			$(".intro").css("height", "100vh");
		}
		// If page scrolls above nav bar
		else {
			$("nav").css({"position": "initial", "top": "initial"});
			$(".intro").css("height", "85vh");
		}


	// 		background-color: red;
	// position: fixed;
	// top: 0;
	// width: 100%;
	// opacity: 0.5;


		// if (winPos - navPos >= 0) {
		// 	$("nav").addClass("topScroll");
		// 	$(".intro").css("height", "100vh");
		// 	// $("#about").addClass("topSection");
		// 	// $("nav").css("color","white");
		// }
		// if (winPos - navPos < 0) {
		// 	$("nav").removeClass("topScroll");
		// 	// $("#about").removeClass("topSection");
		// 	// When scrolling down, background colour changes from black (0) to white (255)


		// 	// var bgColor = 255 * winPos / navPos;
		// 	// var fontColor = 255 * (1 - winPos / navPos);
		// 	// console.log(bgColor, fontColor);
		// 	// var bgStr = "rgb("+bgColor+","+bgColor+","+bgColor+")";
		// 	// console.log(bgStr);
		// 	// $("nav").css("color",bgStr);



		// 	// var r = winPos / navPos;
		// 	// var rgb = 255 * (1 - r);
		// 	// var str = "rgb(" + rgb.toString() + "," + rgb.toString() + "," + rgb.toString() + ")";
		// 	// console.log(winPos, navPos ,r, rgb);
		// 	// console.log(str);
		// 	// $("nav").css("opacity", 1 - r);
		// 	// $("nav").css("color", str);
		// }
	});

	// Change BG colour - blk to white
	// Change font colour - white to blk
	// .topScroll includes opacity 0.5ish 

	// Add div "push" between navBar and about that appears to push it all down when navBar fixes in place?

	// Just manipulate css instead of adding and removing classes on nav?




});