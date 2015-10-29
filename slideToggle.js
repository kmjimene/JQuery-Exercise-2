$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
$('.box').hide();
$('#b1').click(function(){
	$('.one').toggle();

});
$('#b2').click(function(){
	$('.two').slideToggle();

});
$('#b3').click(function(){
	$('.three').fadeToggle();

});
$('#b4').on('click', function(){
	$('.four').toggle();

});
// ----------------------------------------------------------------------------
}); // do not delete 
