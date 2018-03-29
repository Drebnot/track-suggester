$(document).ready(function(){
  $("main-form").submit(function(event) {
    event.preventDefault();

    var question1 = parseInt $("input:radio[name=question1]:checked").val();
    var question2 = parseInt $("input:radio[name=question2]:checked").val();
    var question3 = parseInt $("input:radio[name=question3]:checked").val();
    var question4 = parseInt $("input:radio[name=question4]:checked").val();
    var question5 = parseInt $("input:radio[name=question5]:checked").val();
    var answer = question1 + question2 + question3 + question4 + question5;

    if ((question1 === "CSS") && (question2 === "CSS")) {
      $("#tracksuggestion").text("CSS");
    } else if ((question1 === "C#") && (question2 === "C#")) {
      $("track-suggestion").text("C#");
    } else if ((question1 === "Java") && (question2 === "Java")) {
      $("track-suggestion").text("Java");
    }


    $("#button").click(function() {
      $("track-suggestion").show
    });
  });
});
