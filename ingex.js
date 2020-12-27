

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 0);	


$(function() {
    $("#item").click(function() {
        $("#submenu").slideToggle(500);
    });
}); 

$(function() {
   $('.circle-mood').click(function() {
   $ (this).toggleClass('clicked');
});
});