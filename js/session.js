


$(window).resize(function() {
  var StimulationContainerOffset = 3;
    if(Foundation.MediaQuery.current === "medium"){
      StimulationContainerOffset === 2;
    }
    else if (Foundation.MediaQuery.current === "small") {
      StimulationContainerOffset === 1;
    }
});

$(document).ready(function(){
  var StimulationContainerOffset = 3;
    if(Foundation.MediaQuery.current === "medium"){
      StimulationContainerOffset === 2;
    }
    else if (Foundation.MediaQuery.current === "small") {
      StimulationContainerOffset === 1;
    }
    
  var stimulationBtn = $(".stimulation__btn");
  var btnNext = $(".js-stimulation-next");
  var btnPrev = $(".js-stimulation-prev");
  var elements = $(".stimulationIdea__element");
  var stimulationControlBtns = $(".stimulation__controll__btn");
  var btnPreviousIdeas = $(".sessionIdeas__button-previous");

  stimulationBtn.click(function(){
    $(this).closest(".stimulation__container").toggleClass("stimulation__container-opened");
    stimulationControlBtns.toggleClass("display-inline-block");
    if ( $(this).text() === "Show stimulation" ){
      $(this).text("Hide stimulation");
    }
    else if ( $(this).text() === "Hide stimulation" ){
      $(this).text("Show stimulation");
    }
  });

  var number = 0;
  var elementsCounter = elements.length;
  console.log(elementsCounter);

  btnNext.click(function(){

    if ( number >= elementsCounter - StimulationContainerOffset ) {
      return false;
    }
    else{
      number = number + 1;
      console.log("Number " + number);
      translate = "translateX(-" + number + "00%)";
      console.log("next");
      elements.css("transform", translate);
      return number;
    }
  });

  btnPrev.click(function(){
    if ( number === 0 ){
      console.log("block");
      return false;
    }
    else{
      number = number - 1;
      console.log("Number " + number);
      translate = "translateX(-" + number + "00%)";
      console.log("prev");
      elements.css("transform", translate);
      return number;
    }
  });

  btnPreviousIdeas.click(function(){

  });


});
