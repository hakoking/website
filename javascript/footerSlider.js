$(document).ready(function(){

	
	$('#sliderbuttondown').click(function() {
		$('#sliderbuttondown').css('display','none');
	  $('#footerslider').slideDown(400, function() {
	  		//$('#sliderbuttondown').hide();
	  });
	  
	  $('#sliderbuttonup').slideDown(400, function() {

	  });
	  //this.id = 'sliderbuttonup';
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