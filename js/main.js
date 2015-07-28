$(function() {
  console.log("whee!");

  // event handler
  // $("#btn-click").click(function(event) {
  //   event.preventDefault();
  //   // grabs value from input box after button click
  //   var input = $("input").val();
  //   // display value within the browser's console
  //   console.log(input);
  //   // add value to the DOM
  //   $(".results").empty().append(input);
  // });
  
  // hide the story
  $("#story").hide();
  
  // event handler
  $("#btn-click").click(function(event) {
    event.preventDefault();
    // grabs value from input boxes and appends them to the DOM
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

    // show story
    $("#story").show();

    // empty form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

    // play again button
    $("#play-btn").click(function(event) {
      $("#questions").show();
      $("#story").hide();
    });

  });

});