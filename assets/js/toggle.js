$(document).ready(function () {
  $(".invisible").hide();
});
$(".show-more-btn").click(function () {
  $(this).siblings("p").removeClass('invisible').toggle("fast");
});