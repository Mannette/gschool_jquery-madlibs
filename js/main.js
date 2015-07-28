$(function() {
  console.log("whee!");

  // event handler
  $("#btn-click").click(function(event) {
    event.preventDefault();
    var input = $("input").val();
    console.log(input);
  });

});