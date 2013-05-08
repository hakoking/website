$(document).ready(function(){

	// Remove the class of child and grandchild
	$("#nav ul.child").removeClass("child");
	$("#nav ul.grandchild").removeClass("grandchild");
	
	$("#nav li").has("ul").hover(function(){

		$(this).addClass("current").children("ul").fadeIn();
	}, function() {

		$(this).removeClass("current").children("ul").stop(true, true).css("display", "none");
	});

});