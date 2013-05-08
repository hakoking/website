$(document).ready(function(){

	
	$('#sliderbuttondown').click(function() {
		$('#sliderbuttondown').css('display','none');
	  $('#footerslider').slideDown(400, function() {
	  });
	  
	  $('#sliderbuttonup').slideDown(400, function() {
	
	  });
	  //effectFadeIn('sliderbuttonup');
	});

	$('#sliderbuttonup').click(function() {

			$('#footerslider').slideUp('slow', function() {
				$('#sliderbuttonup').hide();
			});
	  $('#sliderbuttondown').slideDown(400, function() {

	  });
		//this.id = 'sliderbuttondown';
	});


});

function effectFadeIn(classname) {
	$("#"+classname).fadeOut(800).fadeIn(800, effectFadeOut(classname))
}
function effectFadeOut(classname) {
	$("#"+classname).fadeIn(800).fadeOut(800, effectFadeIn(classname))
}