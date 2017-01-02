$(document).foundation();

$(document).ready(function(){
  $(".admin__info").text(Foundation.MediaQuery.current);
});

window.addEventListener('resize', function(event){
  $(".admin__info").text(Foundation.MediaQuery.current);
});

$(document).ready(function(){
  $(".topBar__hamburger").click(function(){
    $(this).toggleClass("open");
    $(".topBar__respMenu").toggleClass("respMenu-show");
  });
});
