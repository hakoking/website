$(document).ready(function(){

//hide backgrounds
$('achtergrond').hide();
//timeout for javascript running too fast
setTimeout(outer,100);


//put last image to first place with given timeouts
function outer(){
function knipenplak() {
    $(".achtergrond").last().prependTo('#wrap').fadeOut(1000);
    $(".achtergrond").last().fadeIn(1000);    
    setTimeout(knipenplak, 5000);
}
knipenplak();
}
});