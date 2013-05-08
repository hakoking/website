$(document).ready(function(){
	$("#button").click(function(){
		if($(".margin").css("top")=="0px"){
			$("#mediaFeed").fadeOut(250);
			$(".margin").animate({top:"+=100px"},1200);
		}
	});
		  		
	$("#button").click(function(){
		if($(".margin").css("top")=="100px"){
			$(".margin").animate({top:"-=100px"},300);
			$("#mediaFeed").fadeIn(1000);
		}
	});
});
