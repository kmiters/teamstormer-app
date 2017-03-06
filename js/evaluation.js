$(document).ready(function(){
  var btnRate = $(".evalaution__rateButton");

  btnRate.click(function(){

    if ( $(this).siblings().hasClass("evaluation__rateButton-selected") ){
      $(this).siblings().removeClass("evaluation__rateButton-selected");
    }
    $(this).toggleClass("evaluation__rateButton-selected");

    if( $(this).hasClass("evaluation__rateButton-selected") ){
      $(this).parent().siblings(".evaluation__text").addClass("op20");
      $(this).closest(".evaluation__idea").addClass("bgTransparent");
    }
    else{
      $(this).parent().siblings(".evaluation__text").removeClass("op20");
      $(this).closest(".evaluation__idea").removeClass("bgTransparent");
    }

  });
});
