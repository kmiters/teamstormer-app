$(document).ready(function(){
  $(".admin__info").text(Foundation.MediaQuery.current);
  console.log("done");
});
window.addEventListener('resize', function(event){
  $(".admin__info").text(Foundation.MediaQuery.current);
});
