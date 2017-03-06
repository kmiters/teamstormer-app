$(document).ready(function(){

  var btnInvite = $(".meetingOwnerButton-invite");
  var btnRemove = $(".meetingOwnerButton-remove");
  var modalRemoveUser = $("#removeUserModal");
  var modalBtnPositive = $(".modalButton-positive span");
  var modalBtnNegative = $(".modalButton-negative span");

  btnInvite.click(function(){
    $(this).closest(".meetingOwner").addClass("js-ownerToAdd");
    $(document).find(".js-ownerToAdd").find(".form__error").removeClass("display-block");
    $(document).find(".js-ownerToAdd").find(".input__owner").removeClass("input-invalid");

    if ( validateEmail( $(this).closest(".js-ownerToAdd").find(".input__owner").val() ) === true ) {
      console.log("email true");
      $(this).closest(".js-ownerToAdd").find(".form__success").addClass("display-block").text("Invitation sent.");
      $(document).find(".js-ownerToAdd").find(".meetingOwnerButton-invite").addClass("display-none");
      $(document).find(".js-ownerToAdd").find(".meetingOwnerButton-remove").removeClass("display-none");

    }
    else{
      console.log("email false")
      $(this).closest(".js-ownerToAdd").find(".input__owner").addClass("input-invalid");
      $(this).closest(".js-ownerToAdd").find(".form__error").addClass("display-block").text("Wrong email address.");
    }

  });

  btnRemove.click(function(){
    modalRemoveUser.foundation('open');
    $(this).closest(".meetingOwner").addClass("js-ownerToRemove");

    modalBtnNegative.click(function(){
      console.log("negative");
      $(document).find(".js-ownerToRemove").removeClass("js-ownerToRemove");
      modalRemoveUser.foundation('close');
    });

    modalBtnPositive.click(function(){
      console.log("positive");
      $(document).find(".js-ownerToRemove").find(".meetingOwnerButton-remove").addClass("display-none");
      $(document).find(".js-ownerToRemove").find(".meetingOwnerButton-invite").removeClass("display-none");
      $(document).find(".js-ownerToRemove").find(".input__owner").val("");
      $(document).find(".js-ownerToRemove").removeClass("js-ownerToRemove");
      modalRemoveUser.foundation('close');

    });
  });

});
