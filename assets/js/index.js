//<------------------------變數宣告------------------------>


//<------------------------Jquery----------------------->

$("document").ready(function(){
   $(window).scroll(function(evt) {
      if ($(window).scrollTop() > 0) {
          $(".navbar").removeClass("navbar-top");
      }
      else {
          $(".navbar").addClass("navbar-top");
      }
   });
});

//<------------------------FUNCTION----------------------->

var s = skrollr.init();
