//Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Hovering over Delete will hover in/out

//Clicking X will Delete Todo
$("ul").on("click", "span", function(event) {
  $(this).parent("li").remove();
  event.stopPropagation();
});

//Input Creates a New Todo
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //new toDo from input
    var toDoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + toDoText + "</li>");
  }
});

//Click Plus symbol hides text area
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle(".input")
});
