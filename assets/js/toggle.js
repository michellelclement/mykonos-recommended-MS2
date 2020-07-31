// Code as directed by Course material and EmailJS

$(document).ready(function () {
  $(".invisible").hide();
});
$(".show-more-btn").click(function () {
  $(this).siblings("p").removeClass('invisible').toggle("fast");
});

$(function(){
   $(".show-more-btn").click(function () {
      $(this).text(function(text){
          return text === "Tell me less..." ? "Tell me more..." : "Tell me less...";
      })
   });
})