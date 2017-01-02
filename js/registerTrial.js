$(document).ready(function($){
  $("#trialPassword").strength({
        strengthClass: 'strength',
        strengthMeterClass: 'strength_meter shadow',
        strengthButtonClass: 'button_strength',
        strengthButtonText: 'Show password',
        strengthButtonTextToggle: 'Hide Password'
    });

    var email = $(".input__mail");
    var submit = $(".button-submit");
    var password = $("#trialPassword");
    var passwordRepeat = $("#trialPasswordRepeat");

    submit.click(function(e){
      event.preventDefault();

      email.removeClass("input-invalid");
      password.removeClass("input-invalid");
      passwordRepeat.removeClass("input-invalid");

      // VALIDATE IF EMAIL IS CORRECT

      if ( validateEmail(email.val()) == true ){
        email.removeClass("input-invalid");
        email.siblings(".form__error").removeClass("display-block");
        console.log("Email valid");
      }
      else{
        email.addClass("input-invalid");
        email.siblings(".form__error").addClass("display-block");
        password.siblings(".form__error").removeClass("display-block")
        passwordRepeat.siblings(".form__error").removeClass("display-block")
        console.log("Email invalid");
        return false;
      }

      // VALIDATE PASSWORDS

      if ( !password.val() ) {
        console.log("password empty");
        password.addClass("input-invalid");
        password.siblings(".form__error").addClass("display-block").text("Password can't be empty");
        return false;
      }

      else if ( password.val().length < 8 ){
        console.log("Password too short");
        password.addClass("input-invalid");
        password.siblings(".form__error").addClass("display-block").text("Password is too short");
        return false;
      }

      else if ( password.val() !== passwordRepeat.val() ) {
        console.log("Passwords dont match");
        passwordRepeat.addClass("input-invalid");
        passwordRepeat.siblings(".form__error").addClass("display-block").text("Passwords do not match");
        return false;
      }

      else if ( !passwordRepeat.val() ) {
        console.log("password repeat empty");
        passwordRepeat.addClass("input-invalid");
        passwordRepeat.siblings(".form__error").addClass("display-block").text("Please repeat the password");
        return false;
      }

      else{
        email.removeClass("input-invalid");
        password.removeClass("input-invalid");
        password.siblings(".form__error").removeClass("display-block");
        passwordRepeat.removeClass("input-invalid");
        passwordRepeat.siblings(".form__error").removeClass("display-block");

        // HERE GOES REGISTRATION ACTION
        console.log("Success, register new user.")
      }


    });
});
