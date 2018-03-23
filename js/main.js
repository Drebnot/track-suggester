$(function(){
  $('form#text-form').submit(function(event){
    event.preventDefault();
    var description = $('text-input').val();
    var question1 = $("input:radio[name=work]:checked").val();
    var question2 = $("input:radio[name=work]:checked").val();
  });
});
