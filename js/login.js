$(document).ready(function(){
  var email = $(".input__mail");
  var submit = $(".button-submit");

  submit.click(function(e){
    event.preventDefault();

    if ( validateEmail(email.val()) == true ){
      email.removeClass("input-invalid");
      email.siblings(".form__error").removeClass("display-block");
    }
    else{
      email.addClass("input-invalid");
      email.siblings(".form__error").addClass("display-block");
    }
  });
});
