$(function(){
  $('form#text-form').submit(function(event){
    event.preventDefault();
    var name = $('text-input').val();
    var work = $("input:radio[name=work]:checked").val();
  });
});
