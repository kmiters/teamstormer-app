$(document).ready(function(){
  var btnInvite = $(".meetingOwnerButton-invite");
  var btnRemove = $(".meetingOwnerButton-remove");
  var modalRemoveUser = $("#removeUserModal");
  var modalBtnPositive = $(".modalButton-positive span");
  var modalBtnNegative = $(".modalButton-negative span");

  btnInvite.click(function(){
    
  });

  btnRemove.click(function(){
    modalRemoveUser.foundation('open');
    $(this).closest(".meetingOwner").addClass("js-ownerToRemove");

    modalBtnNegative.click(function(){
      console.log("negative");
      modalRemoveUser.foundation('close');
    });

    modalBtnPositive.click(function(){
      console.log("positive");
      $(document).find(".js-ownerToRemove").find(".input__owner").val("");
      modalRemoveUser.foundation('close');
    });
  });



});
