// Code as directed by Course material and EmailJS

$(document).ready(function () {
  $(".invisible").hide();
});
$(".show-more-btn").click(function () {
  $(this).siblings("p").removeClass('invisible').toggle("fast");
});

$(function(){
   $(".show-more-btn").click(function () {

        if ($(this).text() === 'Tell me more...') {
            $(this).text('Tell me less...')
    
        } else {
            $(this).text('Tell me more...')
        }
    });
})

