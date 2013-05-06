$(document).ready(function(){

//hide backgrounds
$('achtergrond').hide();
//timeout for javascript running too fast
setTimeout(knipenplak,50);


//put last image to first place with given timeouts
function knipenplak() {
    $("#wrap img").last().prependTo('#wrap').fadeOut(1000);
    $("#wrap img").last().fadeIn(1000);    
    setTimeout(knipenplak, 5000);
}
knipenplak();
});