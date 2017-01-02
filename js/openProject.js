$(document).ready(function(){
  var btnMore = $(".openProject__more");

  btnMore.click(function(){
    if ( $(this).children(".openProject__ico-more").hasClass("ico-more-active") ) {
      $(this).children(".openProject__ico-more").removeClass("ico-more-active");
    }
    else {
      $(this).children(".openProject__ico-more").addClass("ico-more-active");
    }

    $(this).children(".openProject__tooltip").toggleClass("display-block");
  });

});
