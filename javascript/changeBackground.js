$(document).ready(function(){

$('achtergrond').hide().delay(800);

function anim() {
    $("#wrap img").first().appendTo('#wrap').fadeOut(1000);
    $("#wrap img").first().fadeIn(1000);    
    setTimeout(anim, 5000);
}
anim();

});