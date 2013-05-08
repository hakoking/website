$(document).ready(function(){


	//hover over menu element
	$("#nav li").hover(function(){
		//
		$id = $(this).attr('id');
		$id = $id.slice(4);

		$boxid = $('#box'+$id);

		var horizontalCenter = Math.floor(window.innerWidth/2);
		var leftPos = horizontalCenter - (($boxid.width())/2);

		$boxid.css('left',leftPos);
		$boxid.fadeIn(500);
		$boxid.addClass('con-active');
		//$this.click(
		//	$boxid.addClass('clicked');
		//);
	}
	,function(){
		$id = $(this).attr('id');
		$id = $id.slice(4);
		$boxid = $('#box'+$id);

		$boxid.fadeOut(0);
		$boxid.removeClass('con-active');
	}
	);

	//hover over dd element
	$("#nav li ul").children().hover(function(){
		

		$id = $(this).attr('id');
		$idbox = $id.slice(1,5);
		$boxid = $('#b'+$idbox);

		$('.content-box').css('display','none');
		$boxid.parent().css('display','block');

		$boxid.fadeIn(500);
		$boxid.addClass('con-active');

	}
	,function(){
		$id = $(this).attr('id');
		$idbox = $id.slice(1,5);
		$boxid = $('#b'+$idbox);

		$boxid.fadeOut(0);
		$boxid.removeClass('con-active');
	}
	);

});