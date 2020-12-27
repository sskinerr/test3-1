window.onload = function() {
    var topBtn = document.getElementById("top-btn"),
    scrollInfo = document.getElementById("scroll-info");
    
    topBtn.onclick = function() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera.
        document.body.scrollTop = 0; // For Safari.
    };
    
    window.onscroll = function() {
        scrollInfo.innerHTML;
        
        if (scrollY > 70) {
            topBtn.style.transform = "scale(1)";
        } else {
            topBtn.style.transform = "scale(0)";
        }
    };
};

function slowScroll(id) 
    {$('html, body').animate({
    scrollTop: $(id).offset() .top}, 0);}

 $(document).on("scroll",function () {
 if($(window).scrollTop() === 0)
 $("header").removeClass("fixed");
 else
 $("header").attr("class", "fixed");});



setTimeout(function(){
	document.body.classList.add('body_visible');
}, 0);
