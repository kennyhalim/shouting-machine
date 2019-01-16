$(document).ready(function(){
  $("#text").submit(function(event){
    var usertextInput = $("input#usertext").val();

    $(".usertext").prepend("<p>"+ usertextInput.toUpperCase()+"</p>");

    $("#shout").show();
    event.preventDefault();
  });
});
