$(document).ready(function(){

	//get all imagesNames from folder "media" and prepend as image in div #wrap
	$.ajax({
	  url: "media",
	  success: function(data){
	     $(data).find("a:contains(.jpg)").each(function(){
	        // will loop through 
	        var images = $(this).attr("href");
	        $('#wrap').prepend("<img class='achtergrond' src='media/"+images+"'/>");

	     });
	  }
	});
});