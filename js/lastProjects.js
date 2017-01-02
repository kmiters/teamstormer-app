function SetLastProjects(){


  var container = $(".lastProjects__container");
  var element = $(".lastProjects__element");
  var containerWidth = element.length*(element.width()+40) + (element.length+1)*20;

  var position = container.position();
  var maxX = position.left;
  var minX = $(".lastProjects").width() - container.width();

  if (minX < 0){
    container.draggable({
      axis: "x",
      containment: [ minX, 0, maxX, 0 ]
    });
  }
}

$(document).ready(function(){
  // TOGGLE LAST PROJECTS

  var button = $(".lastProjects__header");

  button.click(function(){
    $(this).parent().toggleClass("lastProjects-show");
  });


  var container = $(".lastProjects__container");
  var element = $(".lastProjects__element");
  var containerWidth = element.length*(element.width()+40) + (element.length+1)*20;

  container.width(containerWidth);
  SetLastProjects();
});


window.onresize = function(event) {
  SetLastProjects();
};
