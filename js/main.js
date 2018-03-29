$(document).ready(function(){
  $("main-form").submit(function(event) {
    event.preventDefault();

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();


    if ((question1 === "CSS") && (question2 === "CSS")) {
      $("#tracksuggestion").text "CSS";
    } else if ((question1 === "C#") && (question2 === "C#")) {
      $("track-suggestion").text("C#");
    } else if ((question1 === "Java") && (question2 === "Java")) {
      $("track-suggestion").text"Java";
    }


    $("#button").click(function() {
      $("track-suggestion").show
    });
  });
});
