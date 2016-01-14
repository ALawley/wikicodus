$(document).ready(function(){
  $(".inline").text("dynamic style(this text was inserterd using javascript and css on a span element)");


  $('button#function').click(function(){
    alert("Hello World!");
  });

  $('h4#jqfunction').click(function() {
    alert("This is a header.");
  });

  $("#formexample form").submit(function(event) {
    var name = $("input#you").val();
    alert("Hello " + name + "!");
    event.preventDefault();
  });

});
