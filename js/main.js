$(document).ready(function () {
  $("form#main-form").submit(function(event) {
    event.preventDefault();

    var question1 = parseInt ($("input:radio[name=question1]:checked").val());
    var question2 = parseInt ($("input:radio[name=question2]:checked").val());
    var question3 = parseInt ($("input:radio[name=question3]:checked").val());
    var question4 = parseInt ($("input:radio[name=question4]:checked").val());
    var question5 = parseInt ($("input:radio[name=question5]:checked").val());


    $("#track-suggestion").show();
    if (question1 + question2 + question3 + question4 + question5 <=5) {
      $("#CSS").show();
    } else if (question1 + question2 + question3 + question4 + question5 <=10) {
      $("#Csharp").show();
    } else {
      $("#Java").show();
    }

  });
});
